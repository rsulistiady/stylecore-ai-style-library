import styles from '../data/styles';
import cameras from '../data/cameras';
import lighting from '../data/lighting';
import moods from '../data/moods';
import textures from '../data/textures';

export function getDashboardStats() {
  return [
    { id: 'styles', label: 'Total Styles', value: styles.length },
    { id: 'cameras', label: 'Camera Presets', value: cameras.length },
    { id: 'lighting', label: 'Lighting Presets', value: lighting.length },
    { id: 'moods', label: 'Mood Profiles', value: moods.length },
    { id: 'textures', label: 'Texture Layers', value: textures.length },
  ];
}

export default getDashboardStats;
