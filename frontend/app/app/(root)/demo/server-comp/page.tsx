/**
 * This page demonstrates a common pattern
 * The entry point is always named Page
 * Page is always an RSC (React Server Component)
 * If we need to fetch data, we can do it at this layer.
 * If we need a client side component, create another component
 * We can pass data to client side components via props
 *
 */

import { auth } from "@/auth";
import { getClient } from "@/lib/gateway/clients";
import { redirect } from "next/navigation";
import { UserProfileForm } from "./_components/user-profile-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TUserProfileForm } from "./_components/user-profile-form/schemas";

export default async function Page() {
  // we can get current user's session
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  // use getClient to create an authenticated client
  const client = await getClient();
  // use the client to make authenticated requests, data is typed
  const { data, error } = await client.GET("/api/account/users/me/");
  if (error) {
    // error.tsx is a special page that is rendered when an error is thrown at this layer
    throw new Error(error);
  }
  const userProfileFormProps = {
    first_name: data.first_name,
    last_name: data.last_name,
    username: data.username,
  } as TUserProfileForm;
  return (
    <main className="flex-row p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>
            Welcome back {data.username}
            <br />
            {data.first_name}
            <br />
            {data.last_name}
          </CardTitle>
          <CardDescription>
            This demonstrates server action mutations with form. Client side
            form validation. Client side form submission. When the form is
            submitted, the client will then reload the data for the current
            user.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <UserProfileForm {...userProfileFormProps} />
        </CardContent>
      </Card>
    </main>
  );
}
