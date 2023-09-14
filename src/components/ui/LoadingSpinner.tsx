import Image from "next/image";

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center bg-indigo-100 h-screen">
      <Image
        className="m-auto"
        src="/loading.svg"
        width={50}
        height={50}
        alt="Loading..."
      />
    </div>
  );
}
