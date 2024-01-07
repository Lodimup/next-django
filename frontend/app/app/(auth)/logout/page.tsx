"use client";

import { signOut } from "next-auth/react";

/**
 * This page is used to sign out the user.
 */
export default function Page() {
  signOut({
    callbackUrl: "/",
  });
  return <div>Signing out...</div>;
}
