"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col h-[100vh] gap-4 justify-center items-center max-w-[550px] mx-auto text-center">
      <h2 className="text-xl font-medium text-indigo-900">{error.message || "Something went wrong"}</h2>
      <p className="max-w-sm">Try refreshing the page. If the problem persists, close the tab and try again.</p>
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
