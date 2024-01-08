/**
 * When the main component is too big, we can split it into multiple components
 * snmaller components can be placed in the same folder as the main component
 */

"use client";

import { Button } from "@/components/ui/button";
import { useNumStore } from "./stores";

export const SomeMoreComponent = () => {
  const [count] = useNumStore((state) => [state.count]);
  return (
    <div className="flex-row space-x-2 border p-4">
      this is another component does not matter if it is nested or not, state is
      shared
      <br />
      {count}
    </div>
  );
};
