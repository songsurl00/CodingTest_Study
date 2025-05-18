function solution(myStr) {
  let answer = myStr
    .replaceAll('a', ' ')
    .replaceAll('b', ' ')
    .replaceAll('c', ' ');
  answer = answer.split(/\s/g).filter((s) => s);
  return answer.length === 0 ? ['EMPTY'] : answer;
}
