"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Characters",
    href: "/characters",
  },
  {
    name: "Episodes",
    href: "/episodes",
  },
  {
    name: "Locations",
    href: "/locations",
  },
  {
    name: "Quotes",
    href: "/quotes",
  },
];

const NavLinks = () => {
  const pathname = usePathname().split("/")[1];

  const list = links.map((link) => {
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
