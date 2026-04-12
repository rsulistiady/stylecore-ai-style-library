import { useMemo, useState } from 'react';
import styles from '../../data/styles';
import cameras from '../../data/cameras';
import lighting from '../../data/lighting';
import moods from '../../data/moods';
import textures from '../../data/textures';
import usePromptBuilder from '../../hooks/usePromptBuilder';
import { exportConfigAsJson } from '../../utils/exportJson';
import { mapDatasetToNameOptions, mapStringsToOptions } from '../../utils/optionMappers';
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

  const styleOptions = useMemo(() => mapDatasetToNameOptions(styles), []);
  const cameraOptions = useMemo(() => mapDatasetToNameOptions(cameras), []);
  const lightingOptions = useMemo(() => mapDatasetToNameOptions(lighting), []);
  const moodOptions = useMemo(() => mapDatasetToNameOptions(moods), []);
  const textureOptions = useMemo(() => mapDatasetToNameOptions(textures), []);

  const selectedStyle = useMemo(
    () => styles.find((style) => style.name === config.style),
    [config.style],
  );

  const substyleOptions = useMemo(
    () => mapStringsToOptions(selectedStyle?.substyles || []),
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
      window.prompt('Copy prompt manually:', prompt);
    }
  };

  const exportJson = () => {
    const succeeded = exportConfigAsJson({ ...config, generatedPrompt: prompt });
    if (!succeeded) {
      window.alert('Unable to export JSON in this browser context.');
    }
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
          <SelectMenu
            label="Core Style"
            value={config.style}
            options={styleOptions}
            onChange={(value) => {
              updateConfig('style', value);
              updateConfig('substyle', '');
            }}
          />
          <SelectMenu
            label="Substyle"
            value={config.substyle}
            options={substyleOptions}
            onChange={(value) => updateConfig('substyle', value)}
            placeholder={selectedStyle ? 'Select a substyle' : 'Pick a style first'}
          />
          <SelectMenu label="Camera" value={config.camera} options={cameraOptions} onChange={(value) => updateConfig('camera', value)} />
          <SelectMenu label="Lighting" value={config.lighting} options={lightingOptions} onChange={(value) => updateConfig('lighting', value)} />
          <SelectMenu label="Mood" value={config.mood} options={moodOptions} onChange={(value) => updateConfig('mood', value)} />
          <SelectMenu label="Texture" value={config.texture} options={textureOptions} onChange={(value) => updateConfig('texture', value)} />
        </div>
      </section>

      <div className="grid gap-4 xl:grid-cols-2">
        <PromptOutput prompt={prompt} onCopy={copyPrompt} onExport={exportJson} />
        <BreakdownPanel config={config} epicScore={epicScore} />
      </div>
    </div>
  );
}
