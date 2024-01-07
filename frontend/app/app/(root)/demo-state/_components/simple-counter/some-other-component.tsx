"use client";

import { Button } from "@/components/ui/button";
import { useNumStore } from "./stores";

export const SomeOtherComponent = () => {
  const [inc, dec] = useNumStore((state) => [state.inc, state.dec]);
  return (
    <div className="flex-row space-x-2">
      this is another component <br />
      <Button onClick={inc}>+</Button>
      <Button onClick={dec}>-</Button>
    </div>
  );
};
