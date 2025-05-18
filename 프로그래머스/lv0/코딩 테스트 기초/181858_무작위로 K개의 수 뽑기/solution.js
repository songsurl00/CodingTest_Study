function solution(arr, k) {
  let result = [...new Set(arr)];
  const n = result.length;

  if (n < k) {
    for (let i = 0; i < k - n; i++) {
      result.push(-1);
    }
  } else {
    result = result.slice(0, k);
  }
  return result;
}
