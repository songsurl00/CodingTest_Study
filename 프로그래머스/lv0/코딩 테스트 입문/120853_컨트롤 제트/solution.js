function solution(s) {
  let prev;
  const answer = s.split(' ');

  return answer.reduce((acc, cur) => {
    if (cur === 'Z') return acc - prev;
    prev = +cur;
    return acc + +cur;
  }, 0);
}
