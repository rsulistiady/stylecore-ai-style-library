const fallbackStyle = {
  name: 'Untitled Style',
  category: 'Uncategorized',
  desc: 'No description available.',
  strengths: 'Not specified.',
  weaknesses: 'Not specified.',
  substyles: [],
};

function sanitizeText(value, fallback) {
  const normalized = String(value || '').trim();
  return normalized || fallback;
}

export function sanitizeStyle(style) {
  return {
    name: sanitizeText(style?.name, fallbackStyle.name),
    category: sanitizeText(style?.category, fallbackStyle.category),
    desc: sanitizeText(style?.desc, fallbackStyle.desc),
    strengths: sanitizeText(style?.strengths, fallbackStyle.strengths),
    weaknesses: sanitizeText(style?.weaknesses, fallbackStyle.weaknesses),
    substyles: Array.isArray(style?.substyles) ? style.substyles.filter(Boolean) : fallbackStyle.substyles,
  };
}

export default sanitizeStyle;
