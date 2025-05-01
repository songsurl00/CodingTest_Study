## 팩토리얼

`i` 팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다.  
예를 들어 5! = 5 × 4 × 3 × 2 × 1 = 120 입니다.

정수 `n`이 주어질 때 다음 조건을 만족하는 가장 큰 정수 `i`를 return 하도록 solution 함수를 완성해주세요.

- i! ≤ n

## 제한사항

- 0 < `n` ≤ 3,628,800

## 입출력 예

| n       | result |
| ------- | ------ |
| 3628800 | 10     |
| 7       | 3      |

## 입출력 예 설명

**입출력 예 #1**

- 10! = 3,628,800입니다.  
  `n`이 3,628,800이므로 최대 팩토리얼인 10을 return 합니다.

**입출력 예 #2**

- 3! = 6, 4! = 24입니다.  
  `n`이 7이므로, 7 이하의 최대 팩토리얼인 3을 return 합니다.

## 내 풀이

```js
function solution(n) {
  let i = 1;

  while (fact(i) <= n) {
    i++;
  }

  return i - 1;
}

function fact(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
```

## 다른 풀이

내 풀이는 매 i 마다 계속 팩토리얼을 계산해서 성능이 떨어진다...

```js
function solution(n) {
  let i = 1;
  let f = 1;
  while (f * i < n) f *= ++i;
  return i;
}
```
