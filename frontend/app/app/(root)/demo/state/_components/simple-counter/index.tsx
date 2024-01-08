/**
 * Main compoent is always in index.tsx and the component name is the same as the folder (CamelCase) folder is always kebab-case
 */

"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNumStore } from "./stores";
import { SomeOtherComponent } from "./some-other-component";
import { Button } from "@/components/ui/button";
import { SomeMoreComponent } from "./some-more-component";

export const SimpleCounter = () => {
  const [count, inc, dec, setCount] = useNumStore((state) => [
    state.count,
    state.inc,
    state.dec,
    state.setCount,
  ]);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Simple state management</CardTitle>
        <CardDescription>
          Simple state management across components. There is no need to pass
          `props`.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-row space-x-2">
        <div>Count: {count}</div>
        <Button onClick={inc}>+</Button>
        <Button onClick={dec}>-</Button>
        <Button onClick={() => setCount(0)}>Reset</Button>
      </CardContent>
      <CardFooter className="flex gap-4">
        <SomeOtherComponent />
        <SomeMoreComponent />
      </CardFooter>
    </Card>
  );
};
