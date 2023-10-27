import Button from "@/components/Button";
import NavLinks from "@/components/NavLinks";
import Container from "@/components/ui/Container";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

interface Props {
  closeMenu: () => void;
}

const MobileMenu = (props: Props) => {
  const { closeMenu } = props;

  return (
    <div className="fixed top-0 left-0 w-full bg-indigo-100 h-screen z-10">
      <nav className="border-b-[1px] border-slate-300">
        <Container className="flex justify-between items-center h-[10vh] ">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={50}
              height={50}
              className="md:grid md:col-start-1 md:col-span-1 sm:w-[80px]"
            />
          </Link>
          <XMarkIcon className="h-6 w-6 text-gray-500 cursor-pointer" onClick={closeMenu} />
        </Container>
      </nav>

      <ul className="grid place-items-center h-[20vh] center relative">
        <NavLinks />
      </ul>
      <div className="absolute bottom-10 left-0 right-0 mx-auto  w-fit ">
        <Button />
      </div>
    </div>
  );
};

export default MobileMenu;
