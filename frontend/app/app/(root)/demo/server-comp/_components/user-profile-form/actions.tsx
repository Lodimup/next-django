"use server";

import { getClient } from "@/lib/gateway/clients";
import { SAResponse } from "@/types/server-actions";
import { revalidatePath } from "next/cache";
import { paths } from "@/schemas/gateway-api-schema";

type TResponse =
  paths["/api/account/users/me/"]["patch"]["responses"]["200"]["content"]["application/json"];
type TPatchProfile =
  paths["/api/account/users/me/"]["patch"]["requestBody"]["content"]["application/json"];

/**
 * Patch profile
 * if successful, revalidate (reload data) of "/"
 */
export async function patchProfile(
  payload: TPatchProfile
): Promise<SAResponse<TResponse>> {
  // simulate slow network
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const client = await getClient();
  const { data, error } = await client.PATCH("/api/account/users/me/", {
    body: payload,
  });
  if (error) return { data: null, error: "Failed to patch" };
  revalidatePath("/");
  return { data: data!, error: null };
}
