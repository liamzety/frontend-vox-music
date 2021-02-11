export const regService = {
  replaceCharRef,
};

const charRefMap: any = {
  '&#39;': "'",
  '&amp;': '&',
  '&quot;': '"',
};
function replaceCharRef(str: string): string {
  const re = new RegExp(Object.keys(charRefMap).join('|'), 'gi');

  return str.replace(re, function (matched: string) {
    return charRefMap[matched.toLowerCase()];
  });
}
