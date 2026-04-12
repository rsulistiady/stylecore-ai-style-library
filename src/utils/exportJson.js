export function exportConfigAsJson(payload) {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return false;
  }

  try {
    const content = JSON.stringify(payload, null, 2);
    const blob = new Blob([content], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = `stylecore-config-${Date.now()}.json`;
    link.style.display = 'none';

    document.body.appendChild(link);
    link.click();
    link.remove();

    setTimeout(() => URL.revokeObjectURL(url), 0);
    return true;
  } catch {
    return false;
  }
}

export default exportConfigAsJson;
