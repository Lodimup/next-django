"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useNumStore } from "./stores";
import { SomeOtherComponent } from "./some-other-component";
import { Button } from "@/components/ui/button";

export const SimpleCounter = () => {
  const [count, inc, dec, setCount] = useNumStore((state) => [
    state.count,
    state.inc,
    state.dec,
    state.setCount,
  ]);
  return (
    <Card>
      <CardHeader>Simple State Management</CardHeader>
      <CardContent className="flex-row space-x-2">
        <div>Count: {count}</div>
        <Button onClick={inc}>+</Button>
        <Button onClick={dec}>-</Button>
        <Button onClick={() => setCount(0)}>Reset</Button>
      </CardContent>
      <CardFooter>
        <SomeOtherComponent />
      </CardFooter>
    </Card>
  );
};
