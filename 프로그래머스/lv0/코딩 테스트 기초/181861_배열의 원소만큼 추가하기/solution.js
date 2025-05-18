function solution(arr) {
  let answer = [];
  arr.forEach((n) => {
    for (let i = 0; i < n; i++) answer.push(n);
  });

  return answer;
}
