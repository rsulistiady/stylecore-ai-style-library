import { useId } from 'react';

export default function SelectMenu({ label, value, options, onChange, placeholder = 'Select an option' }) {
  const id = useId();

  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-sm text-slate-300">{label}</label>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="rounded-xl border border-borderSoft bg-slate-900 px-3 py-2 text-sm text-slate-100 focus:border-accent focus:outline-none"
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.id} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
