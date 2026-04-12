import Badge from '../shared/Badge';

export default function Topbar({ pageTitle }) {
  return (
    <header className="sticky top-0 z-10 border-b border-borderSoft bg-surface/95 px-6 py-4 backdrop-blur">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">{pageTitle}</h2>
          <p className="text-sm text-slate-400">Creative intelligence workspace for AI image direction</p>
        </div>
        <Badge tone="accent">Dark Mode • Premium Workspace</Badge>
      </div>
    </header>
  );
}
