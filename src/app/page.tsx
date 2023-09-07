import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[url('/space.png')] bg-no-repeat bg-center bg-cover h-screen -z-20">
      <div className="bg-gradient-to-r from-violet-950 to-indigo-950 h-screen opacity-25 z-0 fixed top-0 right-0 w-full"></div>

      <Container className="h-screen flex flex-col justify-center items-center gap-8">
        <Image
          src="/logo.png"
          alt="final space logo"
          width={500}
          height={500}
          className=""
        />
        <Link
          href="/"
          className="text-xl opacity-100 z-20 bg-indigo-300 text-indigo-600 rounded-md font-bold py-2 px-4"
        >
          Browse
        </Link>
      </Container>
    </main>
  );
}
