import { Bell, ChevronDown, Search } from "lucide-react";

function TopNavbar() {
  return (
    <header className="h-13 flex items-center justify-between rounded-t-xl bg-gradient-to-r from-[#0F0A3C] to-[#1E1B4B] px-4 text-white">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#16104D] ring-1 ring-white/10">
            <div className="h-3 w-3 rotate-45 rounded-[2px] border border-white/80" />
          </div>
          <span className="text-[15px] font-semibold tracking-tight">Worcspace</span>
        </div>

        <button className="flex items-center gap-1 rounded-md bg-white/10 px-3 py-1 text-[12px] font-medium text-white/90">
          Workspace 1
          <ChevronDown size={14} />
        </button>
      </div>

      <div className="hidden w-full max-w-[280px] items-center rounded-md bg-white/10 px-3 py-1.5 md:flex">
        <Search size={14} className="text-white/60" />
        <input
          type="text"
          placeholder="Search..."
          className="ml-2 w-full bg-transparent text-[12px] text-white outline-none placeholder:text-white/50"
        />
        <span className="text-[11px] text-white/50">⌘K</span>
      </div>

      <div className="flex items-center gap-4">
        <Bell size={16} className="text-white/85" />
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 text-[11px] font-semibold">
          GK
        </div>
      </div>
    </header>
  );
}

export default TopNavbar;