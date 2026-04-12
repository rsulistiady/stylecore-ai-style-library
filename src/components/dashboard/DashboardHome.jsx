import styles from '../../data/styles';
import cameras from '../../data/cameras';
import lighting from '../../data/lighting';
import moods from '../../data/moods';
import textures from '../../data/textures';
import viralFormulas from '../../data/viralFormulas';
import StatsCard from './StatsCard';
import ViralFormulaCard from './ViralFormulaCard';

export default function DashboardHome() {
  const stats = [
    { label: 'Total Styles', value: styles.length },
    { label: 'Camera Presets', value: cameras.length },
    { label: 'Lighting Presets', value: lighting.length },
    { label: 'Mood Profiles', value: moods.length },
    { label: 'Texture Layers', value: textures.length },
  ];

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
          <StatsCard key={stat.label} label={stat.label} value={stat.value} />
        ))}
      </section>

      <section>
        <h3 className="mb-4 text-xl font-semibold">Viral Style Formulas</h3>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {viralFormulas.map((formula) => (
            <ViralFormulaCard key={formula.name} item={formula} />
          ))}
        </div>
      </section>
    </div>
  );
}
