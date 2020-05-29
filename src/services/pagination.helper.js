export const getPageCount = (page, isNext) =>
  isNext ? page + 1 : page < 1 ? 0 : page - 1;
