import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex p-4">
      <Card>
        <CardHeader>
          <CardTitle>
            Welcome to the demo app. Please select a demo from the links below.
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-row gap-4">
          <div>
            <Link href="/demo/server-comp">
              Server component & server action demo
            </Link>
          </div>
          <div>
            <Link href="/demo/state">State demo</Link>
          </div>
          <div>
            <Link href="/demo/dynamic-comp">Dynamic component demo</Link>
          </div>
          <div>
            <Link href="/demo/suspense">Suspense demo</Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
