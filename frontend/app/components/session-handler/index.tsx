import { auth } from "@/auth";
import { redirect } from "next/navigation";

/**
 * Handles the session of the user.
 * If the user is logged in and the refresh token is expired, the user is redirected to the logout page.
 */
export const SessionHandler = async () => {
  const session = await auth();
  if (
    session &&
    new Date().getTime() / 1000 > session.user.refreshTokenExpiresAt
  ) {
    redirect("/logout");
  }
  return null;
};
