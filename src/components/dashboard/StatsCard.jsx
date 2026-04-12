import Card from '../shared/Card';

export default function StatsCard({ label, value }) {
  return (
    <Card className="bg-panelSoft">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-2 text-3xl font-semibold text-white">{value}</p>
    </Card>
  );
}
