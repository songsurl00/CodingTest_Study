function solution(arr) {
  let x = 0;

  while (true) {
    let prev = [...arr];
    arr = arr.map((n) => {
      if (n >= 50 && n % 2 === 0) return n / 2;
      if (n < 50 && n % 2 === 1) return n * 2 + 1;
      return n;
    });

    if (arr.every((n, index) => n === prev[index])) break;
    x++;
  }

  return x;
}
