"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const pages = [
  { name: "Characters", link: "/characters" },
  { name: "Locations", link: "/locations" },
  { name: "Episodes", link: "/episodes" },
];

const LikesNav = () => {
  const pathname = usePathname();
  const activePath = pathname.split("/")[2];

  const links = pages.map((page) => {
    const isActive = page.link.slice(1) === activePath;

    return (
      <li key={page.name}>
        <Link
          href={`/likes/${page.link}`}
          className={`${
            isActive ? "underline text-slate-700" : "text-slate-400"
          } text-center p-2 rounded-md hover:underline hover:text-slate-700`}
        >
          {page.name}
        </Link>
      </li>
    );
  });

  return (
    <nav className="mb-6">
      <ul className="grid grid-cols-3 gap-2 w-fit mx-auto md:m-0 md:ml-auto">{links}</ul>
    </nav>
  );
};

export default LikesNav;
