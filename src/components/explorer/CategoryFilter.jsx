import Button from '../shared/Button';

export default function CategoryFilter({ categories, activeCategory, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? 'primary' : 'ghost'}
          onClick={() => onChange(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}
