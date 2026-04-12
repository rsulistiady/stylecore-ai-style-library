export function calculateEpicScore(config) {
  const weights = {
    subject: 20,
    style: 20,
    substyle: 10,
    camera: 15,
    lighting: 15,
    mood: 10,
    texture: 10,
  };

  return Object.entries(weights).reduce((score, [key, value]) => {
    const present = config?.[key] && String(config[key]).trim().length > 0;
    return score + (present ? value : 0);
  }, 0);
}

export default calculateEpicScore;
