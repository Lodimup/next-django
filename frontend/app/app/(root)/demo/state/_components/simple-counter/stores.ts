/**
 * State management for the simple counter component.
 * State is always stored in stores.tsx file and is local to the component.
 */

import { create } from "zustand";

type State = {
  count: number;
};

type Action = {
  inc: () => void;
  dec: () => void;
  setCount: (count: number) => void;
};

export const useNumStore = create<State & Action>((set, get) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
  setCount: (count) => set({ count }),
}));
