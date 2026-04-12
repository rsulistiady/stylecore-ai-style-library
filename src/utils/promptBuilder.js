const fallback = {
  subject: 'a compelling visual concept',
  style: 'a refined creative style',
  substyle: 'a curated substyle direction',
  camera: 'a cinematic camera perspective',
  lighting: 'premium cinematic lighting',
  mood: 'clear emotional intent',
  texture: 'carefully selected surface detail',
};

export function buildPrompt(config) {
  const {
    subject = fallback.subject,
    style = fallback.style,
    substyle = fallback.substyle,
    camera = fallback.camera,
    lighting = fallback.lighting,
    mood = fallback.mood,
    texture = fallback.texture,
  } = config || {};

  return `Create ${subject}, in the style of ${style}, with ${substyle}, using ${camera}, lit by ${lighting}, expressing ${mood}, enhanced with ${texture}, highly detailed, visually striking, premium composition.`;
}

export default buildPrompt;
