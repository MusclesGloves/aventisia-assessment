function Header() {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-sm font-medium text-indigo-600">Knowledge Base</p>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Manage your content
        </h2>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
          <span className="text-sm font-semibold text-slate-700">KR</span>
        </div>
      </div>
    </div>
  );
}

export default Header;