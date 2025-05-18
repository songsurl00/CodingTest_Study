function solution(arr, flag) {
  return flag.reduce(
    (acc, cur, index) =>
      cur
        ? [...acc, ...new Array(arr[index] * 2).fill(arr[index])]
        : acc.slice(0, -arr[index]),
    []
  );
}
