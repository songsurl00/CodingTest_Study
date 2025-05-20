function solution(picture, k) {
  return picture.flatMap((x) =>
    Array(k).fill([...x].map((s) => s.repeat(k)).join(''))
  );
}
