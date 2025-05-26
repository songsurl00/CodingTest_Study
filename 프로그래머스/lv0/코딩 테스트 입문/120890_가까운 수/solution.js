function solution(array, n) {
  const answer = array.sort().map((num) => Math.abs(num - n)); // array를 오름차순으로 정렬하고 각 요소에서 n의 차이만큼으로 변환해 저장
  const index = answer.indexOf(Math.min(...answer)); // 가장 차이가 작은 값의 index를 계산

  return array[index];
}
