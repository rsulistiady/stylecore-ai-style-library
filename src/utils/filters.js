export function getCategoriesFromStyles(styles) {
  const categorySet = new Set(styles.map((style) => style.category));
  return ['All', ...Array.from(categorySet).sort((a, b) => a.localeCompare(b))];
}

export function filterStylesByCategory(styles, category) {
  if (!category || category === 'All') return styles;
  return styles.filter((style) => style.category === category);
}
