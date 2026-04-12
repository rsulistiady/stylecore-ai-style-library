import Card from '../shared/Card';

export default function ViralFormulaCard({ item }) {
  return (
    <Card className="h-full">
      <h4 className="text-base font-semibold text-white">{item.name}</h4>
      <p className="mt-2 text-sm text-slate-300">{item.formula}</p>
      <p className="mt-3 text-sm text-slate-400">{item.reason}</p>
    </Card>
  );
}
