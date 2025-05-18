function solution(arr, n) {
  const len = arr.length;
  return arr.map((num, index) => (len % 2 !== index % 2 ? num + n : num));
}
