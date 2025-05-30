## 문제 설명

선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.

- 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.

삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return하도록 solution 함수를 완성해주세요.

## 제한사항

- sides의 원소는 자연수입니다.
- sides의 길이는 3입니다.
- 1 ≤ sides의 원소 ≤ 1,000

## 내 풀이

```js
function solution(sides) {
  const sum = sides.reduce((acc, cur) => acc + cur, 0);
  const max = Math.max(...sides);

  return sum - max > max ? 1 : 2;
}
```

## 다른 풀이

주어진 배열을 정렬하고 값에 직접 접근해서 풀었다.

```js
function solution(sides) {
  sides = sides.sort((a, b) => a - b);
  return sides[0] + sides[1] > sides[2] ? 1 : 2;
}
```
