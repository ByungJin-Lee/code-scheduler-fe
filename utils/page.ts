export function getPageLimit(itemCount: number, perPage: number) {
  return Math.floor(itemCount / perPage) + 1;
}

export function getItemScope(itemCount: number, page: number, perPage: number) {
  return {
    start: Math.min(itemCount, (page - 1) * perPage),
    end: Math.min(itemCount, page * perPage),
  };
}
