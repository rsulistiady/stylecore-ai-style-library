export default function Card({ children, className = '' }) {
  return (
    <div className={`rounded-2xl border border-borderSoft bg-panel p-5 shadow-sm ${className}`}>
      {children}
    </div>
  );
}
