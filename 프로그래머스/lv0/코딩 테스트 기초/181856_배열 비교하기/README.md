## 문제 설명

이 문제에서 두 정수 배열의 대소관계를 다음과 같이 정의합니다.

- 두 배열의 길이가 다르다면, 배열의 길이가 긴 쪽이 더 큽니다.
- 배열의 길이가 같다면 각 배열에 있는 모든 원소의 합을 비교하여 더 큰 쪽이 크고, 같다면 같습니다.

두 정수 배열 `arr1`과 `arr2`가 주어졌을 때, 위에서 정의한 배열의 대소관계에 대하여

- `arr2`가 크다면 `-1`
- `arr1`이 크다면 `1`
- 두 배열이 같다면 `0`

을 return 하는 `solution` 함수를 작성해주세요.

## 제한사항

- 1 ≤ `arr1`의 길이 ≤ 100
- 1 ≤ `arr2`의 길이 ≤ 100
- 1 ≤ `arr1`, `arr2`의 원소 ≤ 100
- 문제에서 정의한 배열의 대소관계가 일반적인 프로그래밍 언어에서 정의된 배열의 대소관계와 다를 수 있는 점에 유의해주세요.

## 입력/출력 예

| arr1             | arr2             | result |
| ---------------- | ---------------- | ------ |
| [49, 13]         | [70, 11, 2]      | -1     |
| [100, 17, 84, 1] | [55, 12, 65, 36] | 1      |
| [1, 2, 3, 4, 5]  | [3, 3, 3, 3, 3]  | 0      |

## 입출력 예 설명

### 입력 예 #1

- `arr1`의 길이는 2, `arr2`의 길이는 3으로 `arr2`의 길이가 더 깁니다.
- 따라서 `arr2`가 더 크므로 `-1`을 반환합니다.

### 입력 예 #2

- `arr1`과 `arr2`의 길이는 같고(4), 원소의 합을 비교합니다.
- `arr1`의 합 = 100 + 17 + 84 + 1 = **202**
- `arr2`의 합 = 55 + 12 + 65 + 36 = **168**
- `arr1`이 더 크므로 `1`을 반환합니다.

### 입력 예 #3

- 두 배열의 길이도 같고(5), 원소의 합도 동일하게 15입니다.
- 따라서 두 배열은 같다고 보고 `0`을 반환합니다.

## 내 풀이

```js
function solution(arr1, arr2) {
  if (arr1.length > arr2.length) {
    return 1;
  } else if (arr1.length < arr2.length) {
    return -1;
  } else {
    arr1Reduce = arr1.reduce((acc, cur) => acc + cur, 0);
    arr2Reduce = arr2.reduce((acc, cur) => acc + cur, 0);
    if (arr1Reduce > arr2Reduce) {
      return 1;
    } else if (arr1Reduce < arr2Reduce) {
      return -1;
    } else {
      return 0;
    }
  }
}
```

## 다른 풀이1

함수를 만들어서 해결했다. 조건문을 중첩하는 것 보다 깔끔한 풀이다.

```js
const solution = (arr1, arr2) => {
  return arr1.length !== arr2.length
    ? compare(arr1.length, arr2.length)
    : compare(arr1, arr2, 'reduce');
};

const compare = (a, b, option) => {
  if (option === 'reduce') {
    a = a.reduce((acc, cur) => acc + cur);
    b = b.reduce((acc, cur) => acc + cur);
  }
  return a > b ? 1 : a < b ? -1 : 0;
};
```

## 다른 풀이 2

같은 조건문 비교를 사용했지만 훨씬 가독성이 좋은 풀이다.

```js
function solution(arr1, arr2) {
  if (arr1.length < arr2.length) return -1;
  if (arr1.length > arr2.length) return 1;
  if (arr1.length === arr2.length) {
    const arr_1 = arr1.reduce((acc, cur) => acc + cur);
    const arr_2 = arr2.reduce((acc, cur) => acc + cur);
    if (arr_1 === arr_2) return 0;
    return arr_1 > arr_2 ? 1 : -1;
  }
}
```
