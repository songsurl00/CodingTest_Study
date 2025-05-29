function solution(s) {
  const map = new Map();
  const answer = [];

  [...s].forEach((e) => {
    map.set(e, map.get(e) ? map.get(e) + 1 : 1);
  });

  map.forEach((v, k) => {
    if (v === 1) answer.push(k);
  });

  return answer.sort().join('');
}
