"use server";

import { getUnAuthClient } from "@/lib/gateway/clients";
import { SAResponse } from "@/types/server-actions";

export async function newFile(
  formData: FormData
): Promise<SAResponse<boolean>> {
  const client = getUnAuthClient();
  const { data, error } = await client.POST(
    "/api/demo/demo/form-action-upload/",
    {
      // @ts-ignore type is overwritten on the next line
      body: formData,
      // overwrites the default body serializer, since formData is already FormData we can return immediately
      bodySerializer: (body) => body,
    }
  );
  if (error) {
    console.log(error);
    return { data: false, error };
  }
  return { data: true, error: null };
}
