import { useMemo, useState } from 'react';
import styles from '../../data/styles';
import cameras from '../../data/cameras';
import lighting from '../../data/lighting';
import moods from '../../data/moods';
import textures from '../../data/textures';
import usePromptBuilder from '../../hooks/usePromptBuilder';
import { exportConfigAsJson } from '../../utils/exportJson';
import Button from '../shared/Button';
import SubjectInput from './SubjectInput';
import SelectMenu from './SelectMenu';
import PromptOutput from './PromptOutput';
import BreakdownPanel from './BreakdownPanel';

const initialState = {
  subject: '',
  style: '',
  substyle: '',
  camera: '',
  lighting: '',
  mood: '',
  texture: '',
};

export default function CombinationLab() {
  const [config, setConfig] = useState(initialState);

  const selectedStyle = useMemo(
    () => styles.find((style) => style.name === config.style),
    [config.style],
  );

  const substyleOptions = useMemo(
    () => (selectedStyle?.substyles || []).map((name) => ({ id: name.toLowerCase().replaceAll(' ', '-'), name })),
    [selectedStyle],
  );

  const { prompt, epicScore } = usePromptBuilder(config);

  const updateConfig = (key, value) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  const resetForm = () => setConfig(initialState);

  const copyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
    } catch {
      // graceful fallback for restricted browser clipboard contexts
      window.prompt('Copy prompt manually:', prompt);
    }
  };

  const exportJson = () => {
    exportConfigAsJson({ ...config, generatedPrompt: prompt });
  };

  return (
    <div className="space-y-5">
      <section className="rounded-2xl border border-borderSoft bg-panel p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold">Combination Lab</h3>
            <p className="mt-2 text-sm text-slate-300">Combine style parameters to generate production-ready prompt structures.</p>
          </div>
          <Button variant="danger" onClick={resetForm}>Reset</Button>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <SubjectInput value={config.subject} onChange={(value) => updateConfig('subject', value)} />
          <SelectMenu label="Core Style" value={config.style} options={styles} onChange={(value) => {
            updateConfig('style', value);
            updateConfig('substyle', '');
          }} />
          <SelectMenu label="Substyle" value={config.substyle} options={substyleOptions} onChange={(value) => updateConfig('substyle', value)} placeholder={selectedStyle ? 'Select a substyle' : 'Pick a style first'} />
          <SelectMenu label="Camera" value={config.camera} options={cameras} onChange={(value) => updateConfig('camera', value)} />
          <SelectMenu label="Lighting" value={config.lighting} options={lighting} onChange={(value) => updateConfig('lighting', value)} />
          <SelectMenu label="Mood" value={config.mood} options={moods} onChange={(value) => updateConfig('mood', value)} />
          <SelectMenu label="Texture" value={config.texture} options={textures} onChange={(value) => updateConfig('texture', value)} />
        </div>
      </section>

      <div className="grid gap-4 xl:grid-cols-2">
        <PromptOutput prompt={prompt} onCopy={copyPrompt} onExport={exportJson} />
        <BreakdownPanel config={config} epicScore={epicScore} />
      </div>
    </div>
  );
}
