## 문제 설명

문자열 `my_string`이 매개변수로 주어질 때,  
`my_string` 안에 있는 숫자만 골라 **오름차순 정렬한 리스트**를 return 하도록 `solution` 함수를 작성해보세요.

## 제한사항

- 1 ≤ `my_string`의 길이 ≤ 100
- `my_string`에는 숫자가 한 개 이상 포함되어 있습니다.
- `my_string`은 영어 소문자 또는 0부터 9까지의 숫자로 이루어져 있습니다.

## 입력값 예

| my_string     | result            |
| ------------- | ----------------- |
| `"hi12392"`   | `[1, 2, 2, 3, 9]` |
| `"p2o4i8gj2"` | `[2, 2, 4, 8]`    |
| `"abcde0"`    | `[0]`             |

## 입력값 예 설명

### 입력값 예 #1

- `"hi12392"`에 있는 숫자 1, 2, 3, 9, 2를 오름차순 정렬 → `[1, 2, 2, 3, 9]`을 return 합니다.

### 입력값 예 #2

- `"p2o4i8gj2"`에 있는 숫자 2, 4, 8, 2를 오름차순 정렬 → `[2, 2, 4, 8]`을 return 합니다.

### 입력값 예 #3

- `"abcde0"`에 있는 숫자 0을 오름차순 정렬 → `[0]`을 return 합니다.

## 내 풀이

```js
function solution(my_string) {
  return [...my_string]
    .filter((c) => /[\d]+/g.test(c))
    .map((c) => Number(c))
    .sort();
}
```

## 다른 풀이

문자열을 분리하고 !isNaN으로 숫자인 것만 남겼다

```js
function solution(my_string) {
  return my_string
    .split('')
    .filter((v) => !isNaN(v))
    .map((v) => v * 1)
    .sort((a, b) => a - b);
}
```
