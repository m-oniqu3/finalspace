"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Characters",
    href: "/characters",
    showDesktop: true,
  },
  {
    name: "Episodes",
    href: "/episodes",
    showDesktop: true,
  },
  {
    name: "Locations",
    href: "/locations",
    showDesktop: true,
  },
  {
    name: "Quotes",
    href: "/quotes",
    showDesktop: true,
  },
  {
    name: "Likes",
    href: "/likes/characters",
    showDesktop: false,
  },
];

interface Props {
  isMobile?: boolean;
}

const NavLinks = (props: Props) => {
  const pathname = usePathname().split("/")[1];

  const { isMobile } = props;

  const filteredLists = !isMobile ? links.filter((link) => link.showDesktop) : links;

  const list = filteredLists.map((link) => {
    const isActive = pathname === link.name.toLowerCase();
    return (
      <li key={link.name}>
        <Link
          href={link.href}
          className={`hover:underline hover:text-slate-700
                ${isActive ? "text-slate-700" : "text-slate-400"}
                `}
        >
          {link.name}
        </Link>
      </li>
    );
  });

  return list;
};

export default NavLinks;
