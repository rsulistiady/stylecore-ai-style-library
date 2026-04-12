const navItems = [
  { key: 'dashboard', label: 'Dashboard Home' },
  { key: 'explorer', label: 'Style Explorer' },
  { key: 'lab', label: 'Combination Lab' },
  { key: 'presets', label: 'Saved Presets' },
  { key: 'admin', label: 'Admin (Future)' },
];

export default function Sidebar({ activePage, onPageChange }) {
  return (
    <aside className="w-full border-b border-borderSoft bg-panel p-4 lg:h-screen lg:w-72 lg:border-b-0 lg:border-r">
      <div className="mb-6">
        <h1 className="text-xl font-semibold">StyleCore</h1>
        <p className="mt-1 text-sm text-slate-400">AI Master Style Library Dashboard</p>
      </div>

      <nav className="grid gap-2">
        {navItems.map((item) => {
          const isActive = activePage === item.key;
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => onPageChange(item.key)}
              className={`w-full rounded-xl px-3 py-2 text-left text-sm transition-colors ${
                isActive ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-800/80'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
