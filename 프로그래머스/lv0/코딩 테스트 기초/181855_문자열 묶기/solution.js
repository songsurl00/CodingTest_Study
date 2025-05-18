function solution(strArr) {
  const map = new Map();
  strArr.forEach((str) => {
    const key = str.length;
    map.set(key, (map.get(key) || 0) + 1);
  });

  return Math.max(...map.values());
}
