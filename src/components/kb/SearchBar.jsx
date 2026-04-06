import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="flex h-10 w-full items-center rounded-md border border-[#E6E7EF] bg-white px-3">
      <Search size={14} className="text-[#A0A1AE]" />
      <input
        type="text"
        placeholder="Search..."
        className="ml-2 w-full bg-transparent text-[12px] text-[#555564] outline-none placeholder:text-[#A0A1AE]"
      />
    </div>
  );
}

export default SearchBar;