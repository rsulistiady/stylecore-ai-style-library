export default function Button({ children, onClick, variant = 'primary', type = 'button', disabled = false }) {
  const variants = {
    primary: 'bg-accent text-white hover:bg-indigo-400',
    ghost: 'bg-transparent border border-borderSoft text-slate-200 hover:bg-slate-800',
    danger: 'bg-red-600 text-white hover:bg-red-500',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`rounded-xl px-4 py-2 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]}`}
    >
      {children}
    </button>
  );
}
