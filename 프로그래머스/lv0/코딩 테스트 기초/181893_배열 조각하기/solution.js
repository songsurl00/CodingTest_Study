function solution(arr, query) {
  query.forEach((i, index) => {
    index % 2 === 0 ? (arr = arr.slice(0, i + 1)) : (arr = arr.slice(i));
  });

  return arr;
}
