## 배명ㄹ 만들기 1

정수 `n`과 `k`가 주어졌을 때, 1 이상 `n` 이하의 정수 중에서 `k`의 배수를 오름차순으로 저장한 배열을 `return` 하는 `solution` 함수를 작성해 주세요.

## 제한사항

- `1 ≤ n ≤ 1,000,000`
- `1 ≤ k ≤ min(1,000, n)`

## 입력 / 출력 예

| n   | k   | result      |
| --- | --- | ----------- |
| 10  | 3   | [3, 6, 9]   |
| 15  | 5   | [5, 10, 15] |

## 입출력 예 설명

입출력 예 1

- 1 이상 10 이하의 3의 배수는 3, 6, 9 이므로 `[3, 6, 9]`를 `return` 합니다.

입출력 예 2

- 1 이상 15 이하의 5의 배수는 5, 10, 15 이므로 `[5, 10, 15]`를 `return` 합니다.

## 내 풀이

```js
function solution(n, k) {
  let i = 1;
  let answer = [];
  while (k * i <= n) {
    answer.push(k * i++);
  }

  return answer;
}
```

## 다른 풀이

for문으로 풀었다

```js
function solution(n, k) {
  var answer = [];
  for (let i = k; i <= n; i += k) {
    answer.push(i);
  }
  return answer;
}
```
