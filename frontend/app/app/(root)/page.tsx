import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex p-4">
      <Card>
        <CardHeader>
          <CardTitle>Select a demo from the links below.</CardTitle>
        </CardHeader>
        <CardContent className="flex-row gap-4">
          <div>
            <Link href="/demo/server-comp">
              Server component, form, server action, and auth
            </Link>
          </div>
          <div>
            <Link href="/demo/state">State management using Zustand</Link>
          </div>
          <div>
            <Link href="/demo/dynamic-comp">
              Dynamic component: Loading client-side-only component
            </Link>
          </div>
          <div>
            <Link href="/demo/suspense">
              Suspense: Streaming component one by one when one finishes
            </Link>
          </div>
          <div>
            <Link href="/demo/form-action-upload">
              Upload file: using OpenAPI Fetch, and server action
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
