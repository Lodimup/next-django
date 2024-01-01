import dynamic from "next/dynamic";

export const DEditor = dynamic(() => import("./editor"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

export const Editor = () => {
  ///
  return <DEditor />;
};
