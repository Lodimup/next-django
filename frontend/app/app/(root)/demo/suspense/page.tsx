import { Suspense } from "react";
import { SlowComponent } from "./_components/slow-component";

export default function Page() {
  return (
    <main>
      <Suspense fallback={<SlowComponent.Skeleton />}>
        <SlowComponent delay={1000} />
      </Suspense>
      <Suspense fallback={<SlowComponent.Skeleton />}>
        <SlowComponent delay={2000} />
      </Suspense>
    </main>
  );
}
