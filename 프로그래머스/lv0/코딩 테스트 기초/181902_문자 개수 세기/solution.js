function solution(my_string) {
  const alpa = 'abcdefghijklmnopqrstuvwxyz';
  const Upper = alpa.toUpperCase();
  const total = Upper + alpa;

  const arr = [...total].map((item) => {
    return [...my_string].filter((s) => s === item).length;
  });

  return arr;
}
