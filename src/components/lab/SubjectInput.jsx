export default function SubjectInput({ value, onChange }) {
  return (
    <label className="grid gap-2">
      <span className="text-sm text-slate-300">Subject / Concept</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="e.g., a celestial warrior standing on a ruined observatory"
        className="rounded-xl border border-borderSoft bg-slate-900 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-accent focus:outline-none"
      />
    </label>
  );
}
