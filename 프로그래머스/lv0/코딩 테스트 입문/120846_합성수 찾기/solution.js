function solution(n) {
  // 1부터 n 까지의 정수 배열 생성
  const numArray = Array.from({ length: n }, (_, i) => i + 1);

  return numArray.reduce((acc, cur) => {
    // 약수의 개수가 3 이상인 숫자들만 있는 배열의 길이
    const divisorCount = Array.from({ length: cur }, (_, i) => i + 1).filter(
      (item) => cur % item === 0
    ).length;

    return divisorCount >= 3 ? acc + 1 : acc;
  }, 0);
}
