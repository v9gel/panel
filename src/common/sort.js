export const SORT = {
  NONE: "none",
  MIN_MAX: "min-max",
  MAX_MIN: "max-min",
};

export const nextSort = (currentSort) => {
  if (currentSort === SORT.NONE) {
    return SORT.MIN_MAX;
  }

  if (currentSort === SORT.MIN_MAX) {
    return SORT.MAX_MIN;
  }

  if (currentSort === SORT.MAX_MIN) {
    return SORT.NONE;
  }

  return SORT.NONE;
};
