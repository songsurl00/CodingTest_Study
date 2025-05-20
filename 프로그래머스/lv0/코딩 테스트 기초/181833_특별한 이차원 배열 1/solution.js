function solution(n) {
  const arr1 = Array.from({ length: n }, () => []);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      i === j ? arr1[i].push(1) : arr1[i].push(0);
    }
  }
  return arr1;
}
