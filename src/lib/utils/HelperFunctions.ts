export function addCommas(num: number): string {
  let regex = /\B(?=(\d{3})+(?!\d))/g;
  // replace the matched positions with commas
  return num.toString().replace(regex, ',');
}
