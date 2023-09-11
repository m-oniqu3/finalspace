import Container from "@/components/Container";
import Search from "@/components/Search";
import {
  Bars4Icon,
  HeartIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

interface Props {
  showSearchbar: boolean;
}

const Navbar = (props: Props) => {
  const { showSearchbar } = props;
  return (
    <nav className="h-[10vh] grid place-items-center border-b-[1px] border-slate-300">
      <Container className="grid gap-6 place-items-center grid-cols-[auto_1fr_auto] md:grid-cols-12">
        <Image
          src="/logo.png"
          alt="logo"
          width={50}
          height={50}
          className="md:grid md:col-start-1 md:col-span-1"
        />
        <ul
          className={`gap-10 hidden w-fit md:place-items-center text-slate-400 font-light md:grid md:col-start-3 md:grid-cols-5 md:col-span-6 lg:col-start-5 lg:col-span-5 xl:col-start-5 xl:col-span-4
        `}
        >
          <li>
            <Link
              href="/characters"
              className="hover:underline hover:text-slate-700 "
            >
              Characters
            </Link>
          </li>
          <li>
            <Link
              href="/episodes"
              className="hover:underline hover:text-slate-700 "
            >
              Episodes
            </Link>
          </li>
          <li>
            <Link
              href="/locations"
              className="hover:underline hover:text-slate-700 "
            >
              Locations
            </Link>
          </li>
          <li>
            <Link
              href="/quotes"
              className="hover:underline hover:text-slate-700 "
            >
              Quotes
            </Link>
          </li>
        </ul>

        {showSearchbar && (
          <div className="md:grid md:col-start-9 md:col-span-3 lg:col-start-10 lg:col-span-2 ">
            <Search />
          </div>
        )}

        <Bars4Icon className="h-6 w-6 text-gray-500 md:hidden" />

        <div className="hidden md:grid md:gap-4 md:col-start-12 md:grid-cols-2 md:col-span-1">
          <HeartIcon className="h-7 w-7 text-slate-400 " />
          <UserCircleIcon className="h-7 w-7 text-slate-400 " />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
