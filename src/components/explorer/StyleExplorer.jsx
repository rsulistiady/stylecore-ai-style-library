import styles from '../../data/styles';
import useStyleFilters from '../../hooks/useStyleFilters';
import CategoryFilter from './CategoryFilter';
import StyleGrid from './StyleGrid';

export default function StyleExplorer() {
  const { activeCategory, setActiveCategory, categories, filteredStyles } = useStyleFilters(styles);

  return (
    <div className="space-y-5">
      <section className="rounded-2xl border border-borderSoft bg-panel p-5">
        <h3 className="text-xl font-semibold">Master Style Explorer</h3>
        <p className="mt-2 text-sm text-slate-300">
          Browse a production-grade style library. Filter by category to rapidly explore visual directions without compromising UI stability.
        </p>
        <div className="mt-4">
          <CategoryFilter categories={categories} activeCategory={activeCategory} onChange={setActiveCategory} />
        </div>
      </section>

      <StyleGrid styles={filteredStyles} />
    </div>
  );
}
