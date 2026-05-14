import Button from '../shared/Button';
import Card from '../shared/Card';

export default function PromptOutput({ prompt, onCopy, onExport, status }) {
  return (
    <Card>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h4 className="text-lg font-semibold">Generated Prompt</h4>
        <div className="flex gap-2">
          <Button variant="ghost" onClick={onCopy}>Copy Prompt</Button>
          <Button onClick={onExport}>Export JSON</Button>
        </div>
      </div>
      {status ? (
        <p className="mt-3 rounded-xl border border-borderSoft bg-slate-900/80 px-3 py-2 text-xs text-slate-300">
          {status}
        </p>
      ) : null}
      <p className="mt-4 rounded-xl border border-borderSoft bg-slate-900 p-4 text-sm text-slate-200">{prompt}</p>
    </Card>
  );
}
