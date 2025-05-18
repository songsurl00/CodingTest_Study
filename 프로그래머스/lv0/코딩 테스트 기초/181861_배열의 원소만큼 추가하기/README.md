## 문제 설명

아무 요소도 들어있지 않은 빈 배열 `X`가 있습니다. 양의 정수 배열 `arr`가 매개변수로 주어질 때, `arr`의 앞에서부터 차례대로 원소를 보면서 원소가 `X`에 없다면 `X` 맨 뒤에 추가하는 일을 반복한 뒤의 배열 `X`를 반환하는 `solution` 함수를 작성해주세요.

## 제한 사항

- 1 ≤ `arr`의 길이 ≤ 100
- 1 ≤ `arr`의 원소 ≤ 100

## 입력/출력 예

| arr                         | result    |
| --------------------------- | --------- |
| [5, 5, 5, 5, 5, 1, 4, 4, 4] | [5, 1, 4] |
| [6, 6, 6, 6, 6, 6, 6, 6, 6] | [6]       |
| [1]                         | [1]       |

## 입출력 예 설명

### 입력 예 #1

- 예제 1번에 대해서 `X`를 나타내보면 다음과 같습니다:

## 내 풀이

```js
function solution(arr) {
  let answer = [];
  arr.forEach((n) => {
    for (let i = 0; i < n; i++) answer.push(n);
  });

  return answer;
}
```

## 다른 풀이 1

new Array(num).fill(num)로 num개의 요소를 가진 배열을 num으로 채우고, reduce를 이용했다.

```js
function solution(arr) {
  return arr.reduce((list, num) => [...list, ...new Array(num).fill(num)], []);
}
```

## 다른 풀이 1

Array(n).fill(n)은 동일하지만 flatMap으로 map을 통해 생성된 새로운 배열을 평탄화했다.

```js
function solution(arr) {
  return arr.flatMap((n) => Array(n).fill(n));
}
```
