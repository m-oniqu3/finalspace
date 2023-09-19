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
    if (!e.target.value) {
      router.push(`/${pathname}`);
      return;
    }
    router.push(`/${pathname}?search=${e.target.value}`);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className="relative w-full" onSubmit={handleSubmit}>
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
