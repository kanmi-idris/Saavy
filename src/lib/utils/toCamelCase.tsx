export const toCamelCase = (str: string) => {
  return str
    .split(' ')
    .map((word: string, index: number) => {
      if (index > 0) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
      } else {
        return word.toLowerCase();
      }
    })
    .join('');
};
