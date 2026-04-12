import { useMemo } from 'react';
import { buildPrompt } from '../utils/promptBuilder';
import { calculateEpicScore } from '../utils/scoring';

export function usePromptBuilder(config) {
  const prompt = useMemo(() => buildPrompt(config), [config]);
  const epicScore = useMemo(() => calculateEpicScore(config), [config]);

  return { prompt, epicScore };
}

export default usePromptBuilder;
