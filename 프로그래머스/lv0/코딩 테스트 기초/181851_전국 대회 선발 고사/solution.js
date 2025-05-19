function solution(rank, attendance) {
  let answer = rank.filter((n, index) => attendance[index]);
  const [a, b, c] = answer.sort((a, b) => a - b);
  return 10000 * rank.indexOf(a) + 100 * rank.indexOf(b) + rank.indexOf(c);
}
