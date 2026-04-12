function normalize(value) {
  return String(value || '').trim().toLowerCase();
}

export function getCategoriesFromStyles(styles) {
  const categoryMap = new Map();

  styles.forEach((style) => {
    const rawCategory = String(style?.category || '').trim();
    if (!rawCategory) return;

    const normalized = normalize(rawCategory);
    if (!categoryMap.has(normalized)) {
      categoryMap.set(normalized, rawCategory);
    }
  });

  const sorted = Array.from(categoryMap.values()).sort((a, b) => a.localeCompare(b));
  return ['All', ...sorted];
}

export function filterStylesByCategory(styles, category) {
  const normalizedCategory = normalize(category);

  if (!normalizedCategory || normalizedCategory === 'all') return styles;

  return styles.filter((style) => normalize(style?.category) === normalizedCategory);
}
