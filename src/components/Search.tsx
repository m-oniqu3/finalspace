import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Search = () => {
  return (
    <form className="relative w-full">
      <input
        type="text"
        placeholder="Search"
        className="rounded-md border border-slate-400 text-slate-400 placeholder:text-slate-400 py-[0.3rem] px-2 placeholder:text-sm placeholder:font-light focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-transparent w-full font-light text-sm"
      />
      <MagnifyingGlassIcon className="absolute h-4 w-4 text-slate-400 top-2 right-2 " />
    </form>
  );
};

export default Search;
