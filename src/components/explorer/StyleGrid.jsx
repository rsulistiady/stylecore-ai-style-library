import StyleCard from './StyleCard';

export default function StyleGrid({ styles }) {
  if (!styles.length) {
    return (
      <div className="rounded-2xl border border-borderSoft bg-panel p-6 text-sm text-slate-300">
        No styles matched the selected category.
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {styles.map((style, index) => (
        <StyleCard key={style?.id || `${style?.name || 'style'}-${index}`} style={style} />
      ))}
    </div>
  );
}
