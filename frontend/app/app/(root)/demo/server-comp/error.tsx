"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main>
      <h1>Oops something went wrong: {JSON.stringify(error, null, 2)}</h1>
      <button onClick={() => reset()}>Try again</button>
    </main>
  );
}
