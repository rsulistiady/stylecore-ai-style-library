import { useMemo, useState } from 'react';
import { filterStylesByCategory, getCategoriesFromStyles } from '../utils/filters';

export function useStyleFilters(styles) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = useMemo(() => getCategoriesFromStyles(styles), [styles]);
  const filteredStyles = useMemo(
    () => filterStylesByCategory(styles, activeCategory),
    [styles, activeCategory],
  );

  return {
    activeCategory,
    setActiveCategory,
    categories,
    filteredStyles,
  };
}

export default useStyleFilters;
