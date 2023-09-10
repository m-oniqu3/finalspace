import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Search = () => {
  return (
    <form className="relative w-full">
      <input
        type="text"
        placeholder="Search"
        className="rounded-md border border-slate-300 py-[0.25rem] px-2 placeholder:font-light focus:outline-none focus:ring-2 focus:ring-slate-200 focus:border-transparent w-full font-light "
      />
      <MagnifyingGlassIcon className="absolute h-4 w-4 text-slate-400 top-2 right-2 " />
    </form>
  );
};

export default Search;
