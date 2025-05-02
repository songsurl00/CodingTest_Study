function solution(n, k) {
  let i = 1;
  let answer = [];
  while (k * i <= n) {
    answer.push(k * i++);
  }

  return answer;
}
