import Badge from '../shared/Badge';
import Card from '../shared/Card';

export default function StyleCard({ style }) {
  const safeSubstyles = Array.isArray(style?.substyles) ? style.substyles : [];
  const visibleSubstyles = safeSubstyles.slice(0, 4);
  const remainingCount = Math.max(0, safeSubstyles.length - visibleSubstyles.length);

  return (
    <Card className="bg-panelSoft">
      <div className="flex items-start justify-between gap-3">
        <h4 className="text-lg font-semibold text-white">{style.name}</h4>
        <Badge tone="subtle">{style.category}</Badge>
      </div>

      <p className="mt-3 text-sm text-slate-300">{style.desc}</p>

      <div className="mt-4">
        <p className="text-xs uppercase tracking-wide text-slate-500">Substyles</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {visibleSubstyles.map((substyle) => (
            <Badge key={substyle}>{substyle}</Badge>
          ))}
          {remainingCount > 0 ? <Badge tone="accent">+{remainingCount} more</Badge> : null}
        </div>
      </div>

      <div className="mt-4 grid gap-2 text-sm text-slate-300">
        <p>
          <span className="font-semibold text-slate-200">Strengths:</span> {style.strengths}
        </p>
        <p>
          <span className="font-semibold text-slate-200">Weaknesses:</span> {style.weaknesses}
        </p>
      </div>
    </Card>
  );
}
