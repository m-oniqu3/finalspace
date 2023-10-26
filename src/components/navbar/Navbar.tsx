"use client";

import NavLinks from "@/components/NavLinks";
import Search from "@/components/Search";
import Logout from "@/components/navbar/Logout";
import MobileMenu from "@/components/navbar/MobileMenu";
import Container from "@/components/ui/Container";
import { getCurrentSession } from "@/utils/auth";
import { Bars4Icon, HeartIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import Avatar from "react-avatar";

interface Props {
  showSearchbar: boolean;
}

const Navbar = (props: Props) => {
  const { showSearchbar } = props;
  const [showMenu, setShowMenu] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [user, setUser] = useState<string>("");
  const pathname = usePathname();

  const handleMenu = () => setShowMenu((state) => !state);
  const handleLogout = () => setShowDialog((state) => !state);
  const closeMenu = () => setShowMenu(false);
  const closeDialog = () => setShowDialog(false);

  const isLikesPage = pathname.startsWith("/likes") ? "text-indigo-900" : "text-slate-400";

  useEffect(() => {
    const getUser = async () => {
      const session = await getCurrentSession();

      if (session && session.user) {
        const { user } = session;
        user.email && setUser(user.email);
      }
    };

    getUser();
  }, []);

  return (
    <Fragment>
      <nav className="h-[10vh] grid place-items-center border-b-[1px] border-slate-300 bg-indigo-100 fixed top-0 w-full z-10 ">
        <Container
          className={`grid gap-4 place-items-center 
      ${showSearchbar ? "grid-cols-[auto_1fr_auto]" : "grid-cols-[100px_1fr] "}
     
      md:grid-cols-12 `}
        >
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={50}
              height={50}
              className="md:grid md:col-start-1 md:col-span-1 sm:w-[80px]"
            />
          </Link>
          <ul
            className={`gap-10 hidden w-fit md:place-items-center text-slate-400 font-light md:grid md:col-start-3 md:grid-cols-5 md:col-span-6 lg:col-start-4 lg:col-span-5 xl:col-start-5 xl:col-span-4
        `}
          >
            <NavLinks />
          </ul>

          {showSearchbar && (
            <div className="md:grid md:col-start-9 md:col-span-3 lg:col-start-10 lg:col-span-2 lg:w-full">
              <Search />
            </div>
          )}

          <Bars4Icon className="h-6 w-6 text-gray-500 cursor-pointer ml-auto md:hidden" onClick={handleMenu} />

          <div className="hidden md:grid md:gap-4 md:col-start-12 md:grid-cols-2 md:col-span-1">
            <Link href="/likes/characters">
              <HeartIcon className={`h-7 w-7 ${isLikesPage} cursor-pointer hover:text-indigo-900`} />
            </Link>
            <div onClick={handleLogout} className="cursor-pointer">
              {user ? (
                <Avatar name={user} size="28" round={true} color="rgb(165 180 252)" fgColor="white" />
              ) : (
                <UserCircleIcon className="h-7 w-7 text-slate-400 cursor-pointer" />
              )}
            </div>
          </div>
        </Container>
      </nav>

      {showMenu && <MobileMenu closeMenu={closeMenu} />}
      {showDialog && <Logout closeDialog={closeDialog} user={user} />}
    </Fragment>
  );
};

export default Navbar;
