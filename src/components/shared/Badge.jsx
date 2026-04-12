export default function Badge({ children, tone = 'default' }) {
  const tones = {
    default: 'bg-slate-800 text-slate-200 border-slate-700',
    accent: 'bg-indigo-500/20 text-indigo-200 border-indigo-400/30',
    subtle: 'bg-slate-900 text-slate-300 border-slate-700',
  };

  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs ${tones[tone]}`}>
      {children}
    </span>
  );
}
