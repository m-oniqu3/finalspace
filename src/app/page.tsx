import Container from "@/components/ui/Container";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Russo_One } from "next/font/google";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

const russo = Russo_One({ weight: "400", subsets: ["latin"] });

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  let route = "/account";
  if (data.session) route = "/characters";

  return (
    <main className="bg-[url('/space.png')] bg-no-repeat bg-center bg-cover h-screen -z-20">
      <div className="bg-gradient-to-r from-violet-950 to-indigo-950 h-screen opacity-25 z-0 fixed top-0 right-0 w-full"></div>

      <Container className="h-screen flex flex-col justify-center items-center gap-8">
        <Image src="/logo.png" alt="final space logo" width={500} height={500} className="" />
        <Link
          href={route}
          className={`${russo.className} tracking-widest text-xl opacity-100 z-20 bg-indigo-300 text-indigo-600 rounded-md font-bold py-2 px-4 hover:bg-indigo-600 hover:text-indigo-300 transition duration-300 ease-in-out animate-bounce`}
        >
          Browse
        </Link>
      </Container>
    </main>
  );
}
