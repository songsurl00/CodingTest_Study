function solution(num_list) {
  const odd = num_list.reduce(
    (acc, cur, index) => (index % 2 === 1 ? (acc += cur) : acc),
    0
  );
  const even = num_list.reduce(
    (acc, cur, index) => (index % 2 === 0 ? (acc += cur) : acc),
    0
  );

  return Math.max(odd, even);
}
