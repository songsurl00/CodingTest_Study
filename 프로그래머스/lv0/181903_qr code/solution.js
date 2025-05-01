function solution(q, r, code) {
  return [...code].reduce(
    (acc, cur, index) => (index % q === r ? acc + cur : acc),
    ''
  );
}
