import Card from '../shared/Card';

export default function BreakdownPanel({ config, epicScore }) {
  const breakdownRows = [
    ['Subject', config.subject || '—'],
    ['Style', config.style || '—'],
    ['Substyle', config.substyle || '—'],
    ['Camera', config.camera || '—'],
    ['Lighting', config.lighting || '—'],
    ['Mood', config.mood || '—'],
    ['Texture', config.texture || '—'],
  ];

  return (
    <Card>
      <h4 className="text-lg font-semibold">Prompt Breakdown</h4>
      <div className="mt-3 grid gap-2 text-sm">
        {breakdownRows.map(([label, value]) => (
          <div key={label} className="flex items-center justify-between rounded-lg border border-borderSoft bg-slate-900 px-3 py-2">
            <span className="text-slate-400">{label}</span>
            <span className="max-w-[60%] truncate text-right text-slate-100">{value}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-xl border border-indigo-400/30 bg-indigo-500/10 p-3">
        <p className="text-xs uppercase tracking-wide text-indigo-200">Epic Score</p>
        <p className="mt-1 text-2xl font-semibold text-indigo-100">{epicScore}/100</p>
      </div>
    </Card>
  );
}
