function solution(arr) {
  const row = arr.length; // 행의 길이
  const col = arr[0].length; // 열의 길이
  const n = Math.abs(row - col); // 행과 열의 길이 차이

  if (row > col) {
    arr = arr.map((e) => {
      for (let i = 0; i < n; i++) {
        e.push(0);
      }
      return e;
    });
  } else if (row < col) {
    for (let i = 0; i < n; i++) {
      const newArr = Array(col).fill(0);
      arr.push(newArr);
    }
  }

  return arr;
}
