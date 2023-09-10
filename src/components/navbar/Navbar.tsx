import Container from "@/components/Container";
import Search from "@/components/Search";
import { Bars4Icon } from "@heroicons/react/24/outline";
import Image from "next/image";

interface Props {
  showSearchbar: boolean;
}

const Navbar = (props: Props) => {
  const { showSearchbar } = props;
  return (
    <nav className="h-[10vh] grid place-items-center border-b-[1px] border-slate-300">
      <Container className="grid place-items-center grid-cols-[auto_1fr_auto] gap-8">
        <Image src="/logo.png" alt="logo" width={50} height={50} />
        <Search />

        <Bars4Icon className="h-6 w-6 text-gray-500" />
      </Container>
    </nav>
  );
};

export default Navbar;
