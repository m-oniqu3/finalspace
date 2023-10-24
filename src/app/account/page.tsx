import Form from "@/app/account/Form";
import Container from "@/components/ui/Container";
import { Database } from "@/lib/database.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";

const Account = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data } = await supabase.auth.getSession();

  if (data.session) redirect("/characters");

  return (
    <div className="bg-indigo-100 h-screen">
      <nav className="h-[10vh] flex items-center">
        <Container>
          <Image
            src="/logo.png"
            alt="final space logo"
            width={70}
            height={70}
            className=""
          />
        </Container>
      </nav>
      <Form />
    </div>
  );
};

export default Account;
