import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <Card>
        <CardContent className="flex-row gap-4">
          <div>
            <Link href="/demo-server-comp">Go to server component demo</Link>
          </div>
          <div>
            <Link href="/demo-state">Go to state demo</Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
