## 문제 설명

정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

## 제한사항

- 1 ≤ array의 길이 ≤ 100
- 1 ≤ array의 원소 ≤ 100
- 1 ≤ n ≤ 100
- 가장 가까운 수가 여러 개일 경우 더 작은 수를 return 합니다.

## 내 풀이

```js
function solution(array, n) {
  const answer = array.sort().map((num) => Math.abs(num - n)); // array를 오름차순으로 정렬하고 각 요소에서 n의 차이만큼으로 변환해 저장
  const index = answer.indexOf(Math.min(...answer)); // 가장 차이가 작은 값의 index를 계산

  return array[index];
}
```

## 다른 풀이

sort 함수 내에서 a와 n의 차이, b와 n의 차이를 비교해서 차이가 더 작은 수를 앞으로 정렬하고 같은 차이라면 작은 쪽을 앞으로 정렬했다.

```js
function solution(array, n) {
  array.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || a - b);

  return array[0];
}
```
