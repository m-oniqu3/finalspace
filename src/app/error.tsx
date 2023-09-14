"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col h-[100vh] gap-4 justify-center items-center">
      <h2 className="text-2xl font-bold text-indigo-900">
        {error.message || "Something went wrong"}
      </h2>
      <button
        className="font-light rounded-md bg-indigo-200 py-1.5 px-5 border border-indigo-300 min-w-fit hover:border-indigo-500 hover:bg-indigo-300  transition duration-300 ease-in-out"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
