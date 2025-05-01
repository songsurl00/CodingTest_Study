## 합성수 찾기

약수의 개수가 세 개 이상인 수를 **합성수**라고 합니다.  
자연수 `n`이 매개변수로 주어질 때, `n` 이하의 **합성수의 개수**를 return 하도록 `solution` 함수를 완성해주세요.

## 제한사항

- 1 ≤ `n` ≤ 100

## 입출력 예

| n   | result |
| --- | ------ |
| 10  | 5      |
| 15  | 8      |

## 입출력 예 설명

### 입출력 예 #1

- 10 이하의 합성수는 4, 6, 8, 9, 10로 총 5개입니다.  
  따라서 5를 return 합니다.

### 입출력 예 #2

- 15 이하의 합성수는 4, 6, 8, 9, 10, 12, 14, 15로 총 8개입니다.  
  따라서 8을 return 합니다.

## 내 풀이

```js
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
```
