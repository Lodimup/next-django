/**
 * This component will not be rendered on the server side.
 * It will be rendered on the client side only.
 * This is used for components that are not compatible with SSR. Example: components that use window, document, etc.
 * By exporting like this, the component can be used in the same way as other components.
 */
"use client";
import dynamic from "next/dynamic";

export const DEditor = dynamic(
  () => import("./editor").then((mod) => mod.Editor),
  {
    ssr: false,
    loading: () => <div>Loading...</div>,
  }
);

export const Editor = () => {
  //do stuffs here if nessary, else just export the dynamic component with the same name
  return <DEditor />;
};
