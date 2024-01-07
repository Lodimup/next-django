/**
 * NextAuth's config options
 * @see https://authjs.dev/guides/
 */
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import {
  getClient,
  getServiceClient,
  getUnAuthClient,
} from "@/lib/gateway/clients";

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [Google],
  callbacks: {
    /**
     * when a user signs in, create a user in the database if it doesn't exist
     * at this point we use our own database not Google ( or any other providers )
     * then, store user's bearer token in jwt
     */
    async jwt({ token, trigger, profile }) {
      // if refresh token is expired, force sign out
      if (token && new Date().getTime() / 1000 > token.refreshTokenExpiresAt) {
        return null;
      }
      if (trigger === "signIn" && profile) {
        const { email } = profile;
        const client = getServiceClient();
        const { data, error } = await client.POST("/api/account/auths/login/", {
          body: { email: email as string },
        });
        if (error) {
          throw new Error("Failed to login");
        } else if (data) {
          token = {
            ...token,
            accessToken: data.access_token,
            expiresAt: new Date().getTime() / 1000 + data.expires_in,
            refreshToken: data.refresh_token,
            refreshTokenExpiresAt:
              new Date().getTime() / 1000 + data.refresh_token_expires_in,
          };
          return token;
        }
      }
      if ((token.expiresAt as number) < new Date().getTime() / 1000) {
        const client = await getUnAuthClient();
        const { data, error } = await client.POST(
          "/api/account/auths/refresh/",
          {
            body: { refresh_token: token.refreshToken as string },
          }
        );
        if (error) {
          throw new Error("Failed to refresh token");
        } else if (data) {
          token = {
            ...token,
            accessToken: data.access_token,
            expiresAt: new Date().getTime() / 1000 + data.expires_in,
          };
        }
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        ...session.user,
        accessToken: token.accessToken,
      };
      return session;
    },
  },
  events: {
    signOut: async () => {
      const client = await getClient();
      const { error } = await client.POST("/api/account/auths/logout/");
      if (error) {
        throw new Error("Failed to logout");
      }
    },
  },
});
