import { auth } from "@/auth";
import { paths } from "@/schemas/gateway-api-schema";
import { Session } from "next-auth/types";
import createClient from "openapi-fetch";

/**
 * Returns a client for the gateway service.
 * This is strictly for server-server only
 * Do not use for user requests
 */
export function getServiceClient() {
  return createClient<paths>({
    baseUrl: process.env.GATEWAY_URL,
    headers: {
      Authorization: `Bearer ${process.env.GATEWAY_SERVICE_TOKEN}`,
    },
  });
}

/**
 * Returns a client for unauthenticated requests
 */
export function getUnAuthClient() {
  return createClient<paths>({
    baseUrl: process.env.GATEWAY_URL,
  });
}

/**
 * Returns a client for user requests
 */
export async function getClient() {
  const session = (await auth()) as Session;

  return createClient<paths>({
    baseUrl: process.env.GATEWAY_URL,
    headers: {
      Authorization: `Bearer ${session.user.accessToken}`,
    },
  });
}
