import viralFormulas from '../../data/viralFormulas';
import { getDashboardStats } from '../../utils/dashboardStats';
import StatsCard from './StatsCard';
import ViralFormulaCard from './ViralFormulaCard';

export default function DashboardHome() {
  const stats = getDashboardStats();

  return (
    <div className="space-y-8">
      <section>
        <h3 className="text-2xl font-semibold">StyleCore Command Center</h3>
        <p className="mt-2 max-w-3xl text-sm text-slate-300">
          Build premium AI visual direction by combining style systems, cinematic framing, lighting language, and emotional cues.
          This dashboard is architected as a scalable base for future SaaS capabilities including presets, collaboration, and managed content.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {stats.map((stat) => (
          <StatsCard key={stat.id} label={stat.label} value={stat.value} />
        ))}
      </section>

      <section>
        <h3 className="mb-4 text-xl font-semibold">Viral Style Formulas</h3>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {viralFormulas.map((formula, index) => (
            <ViralFormulaCard key={`${formula.name}-${index}`} item={formula} />
          ))}
        </div>
      </section>
    </div>
  );
}
