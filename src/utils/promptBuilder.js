const fallback = {
  subject: 'a compelling visual concept',
  style: 'a refined creative style',
  substyle: 'a curated substyle direction',
  camera: 'a cinematic camera perspective',
  lighting: 'premium cinematic lighting',
  mood: 'clear emotional intent',
  texture: 'carefully selected surface detail',
};

function cleanValue(value, defaultValue) {
  const normalized = String(value || '').trim();
  return normalized || defaultValue;
}

export function buildPrompt(config) {
  const subject = cleanValue(config?.subject, fallback.subject);
  const style = cleanValue(config?.style, fallback.style);
  const substyle = cleanValue(config?.substyle, fallback.substyle);
  const camera = cleanValue(config?.camera, fallback.camera);
  const lighting = cleanValue(config?.lighting, fallback.lighting);
  const mood = cleanValue(config?.mood, fallback.mood);
  const texture = cleanValue(config?.texture, fallback.texture);

  const segments = [
    `Create ${subject}`,
    `in the style of ${style}`,
    `with ${substyle}`,
    `using ${camera}`,
    `lit by ${lighting}`,
    `expressing ${mood}`,
    `enhanced with ${texture}`,
    'highly detailed',
    'visually striking',
    'premium composition',
  ];

  return `${segments.join(', ')}.`;
}

export default buildPrompt;
