export function mapDatasetToNameOptions(dataset) {
  return dataset.map((item) => ({
    id: item.id,
    name: item.name,
  }));
}

export function mapStringsToOptions(items) {
  return items.map((name, index) => ({
    id: `${String(name).toLowerCase().replaceAll(' ', '-')}-${index}`,
    name,
  }));
}
