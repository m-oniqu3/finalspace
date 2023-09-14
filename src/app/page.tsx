import Container from "@/components/ui/Container";
import { Russo_One } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const russo = Russo_One({ weight: "400", subsets: ["latin"] });

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
          href="/account"
          className={`${russo.className} tracking-widest text-xl opacity-100 z-20 bg-indigo-300 text-indigo-600 rounded-md font-bold py-2 px-4 hover:bg-indigo-600 hover:text-indigo-300 transition duration-300 ease-in-out animate-bounce`}
        >
          Browse
        </Link>
      </Container>
    </main>
  );
}
