function solution(my_string) {
  return [...my_string]
    .filter((c) => /[\d]+/g.test(c))
    .map((c) => Number(c))
    .sort();
}
