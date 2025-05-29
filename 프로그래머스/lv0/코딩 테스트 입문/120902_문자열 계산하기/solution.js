function solution(my_string) {
  const answer = my_string.split(' ');

  return answer.reduce(
    (acc, cur, index) =>
      cur === '+'
        ? acc + +answer[index + 1]
        : cur === '-'
        ? acc - +answer[index + 1]
        : acc,
    +answer[0]
  );
}
