function solution(n) {
  let i = 1;

  while (fact(i) <= n) {
    i++;
  }

  return i - 1;
}

function fact(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
