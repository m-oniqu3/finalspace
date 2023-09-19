"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter } from "next/navigation";

import { ChangeEvent, useState } from "react";

const Search = () => {
  const pathname = usePathname().split("/")[1];
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    router.push(`/${pathname}?search=${e.target.value}`);
  };

  return (
    <form className="relative w-full">
      <input
        type="text"
        placeholder={`Search ${pathname}`}
        className="search"
        value={search}
        onChange={handleSearch}
      />
      <MagnifyingGlassIcon className="absolute h-4 w-4 text-slate-400 top-2 right-2 " />
    </form>
  );
};

export default Search;
