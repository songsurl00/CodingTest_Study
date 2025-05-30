## 최대 값 만들기

정수 배열 `numbers` 가 매개변수로 주어집니다.  
`numbers` 의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return 하도록 solution 함수를 완성해주세요.

## 제한사항

- `0 ≤ numbers` 의 원소 ≤ 10,000
- `2 ≤ numbers` 의 길이 ≤ 100

## 입출력 예

| numbers               | result |
| --------------------- | ------ |
| [1, 2, 3, 4, 5]       | 20     |
| [0, 31, 24, 10, 1, 9] | 744    |

## 입출력 예 설명

입출력 예 #1

- 두 수의 곱 중 최댓값은 4 \* 5 = 20 입니다.

입출력 예 #2

- 두 수의 곱 중 최댓값은 31 \* 24 = 744 입니다.

## 내 풀이

내림차순으로 정렬하고 가장 큰 수와 그 다음 큰 수의 곱을 출력했다.

```js
function solution(numbers) {
  const sorted = numbers.sort((a, b) => b - a);

  return sorted[0] * sorted[1];
}
```
