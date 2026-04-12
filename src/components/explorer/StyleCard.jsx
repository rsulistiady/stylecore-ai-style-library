import { sanitizeStyle } from '../../utils/styleSanitizer';
import Badge from '../shared/Badge';
import Card from '../shared/Card';

export default function StyleCard({ style }) {
  const safeStyle = sanitizeStyle(style);
  const visibleSubstyles = safeStyle.substyles.slice(0, 4);
  const remainingCount = Math.max(0, safeStyle.substyles.length - visibleSubstyles.length);

  return (
    <Card className="bg-panelSoft">
      <div className="flex items-start justify-between gap-3">
        <h4 className="text-lg font-semibold text-white">{safeStyle.name}</h4>
        <Badge tone="subtle">{safeStyle.category}</Badge>
      </div>

      <p className="mt-3 text-sm text-slate-300">{safeStyle.desc}</p>

      <div className="mt-4">
        <p className="text-xs uppercase tracking-wide text-slate-500">Substyles</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {visibleSubstyles.map((substyle, index) => (
            <Badge key={`${substyle}-${index}`}>{substyle}</Badge>
          ))}
          {remainingCount > 0 ? <Badge tone="accent">+{remainingCount} more</Badge> : null}
        </div>
      </div>

      <div className="mt-4 grid gap-2 text-sm text-slate-300">
        <p>
          <span className="font-semibold text-slate-200">Strengths:</span> {safeStyle.strengths}
        </p>
        <p>
          <span className="font-semibold text-slate-200">Weaknesses:</span> {safeStyle.weaknesses}
        </p>
      </div>
    </Card>
  );
}
