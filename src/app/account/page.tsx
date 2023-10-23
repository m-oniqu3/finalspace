import Form from "@/app/account/Form";
import Container from "@/components/ui/Container";
import { getCurrentSession } from "@/utils/auth";
import Image from "next/image";
import { redirect } from "next/navigation";

const Account = async () => {
  const session = await getCurrentSession();
  if (session) redirect("/characters");

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
