## 문제 설명

0과 1로 이루어진 정수 배열 `arr`가 주어집니다. `arr`를 이용해 새로운 배열 `stk`를 만들려고 합니다.

`i`의 초기값을 0으로 설정하고 `i`가 `arr`의 길이보다 작으면 다음을 반복합니다.

- 만약 `stk`가 빈 배열이라면 `arr[i]`를 `stk`에 추가하고, `i`에 1을 더합니다.
- `stk`에 원소가 있고, `stk`의 마지막 원소가 `arr[i]`와 같으면 `stk`의 마지막 원소를 `stk`에서 제거하고 `i`에 1을 더합니다.
- `stk`의 마지막 원소가 `arr[i]`와 다르면 `stk`의 맨 마지막에 `arr[i]`를 추가하고 `i`에 1을 더합니다.

위 작업을 마친 후 만들어진 `stk`를 반환하는 `solution` 함수를 작성해주세요.

단, `stk`가 빈 배열이 되었다면 `[-1]`을 반환합니다.

## 제한사항

- 1 ≤ `arr`의 길이 ≤ 1,000,000
- `arr`의 원소는 0 또는 1입니다.

## 입력/출력 예

| arr             | stk             |
| --------------- | --------------- |
| [0, 1, 1, 1, 0] | [0, 1, 0]       |
| [0, 1, 0, 1, 0] | [0, 1, 0, 1, 0] |
| [0, 1, 1, 0]    | [-1]            |

## 입출력 예 설명

### 입력 예 #1

각 작업을 마친 후의 배열의 변화를 나타내면 다음과 같습니다:

| idx | arr[idx] | stk       |
| --- | -------- | --------- |
| 0   | 0        | []        |
| 1   | 1        | [0]       |
| 2   | 1        | [0, 1]    |
| 3   | 1        | [0]       |
| 4   | 0        | [0, 1]    |
| -   | -        | [0, 1, 0] |

따라서 `[0, 1, 0]`을 반환합니다.

### 입력 예 #2

| idx | arr[idx] | stk             |
| --- | -------- | --------------- |
| 0   | 0        | []              |
| 1   | 1        | [0]             |
| 2   | 0        | [0, 1]          |
| 3   | 1        | [0, 1, 0]       |
| 4   | 0        | [0, 1, 0, 1]    |
| -   | -        | [0, 1, 0, 1, 0] |

따라서 `[0, 1, 0, 1, 0]`을 반환합니다.

### 입력 예 #3

| idx | arr[idx] | stk    |
| --- | -------- | ------ |
| 0   | 0        | []     |
| 1   | 1        | [0]    |
| 2   | 1        | [0, 1] |
| 3   | 0        | [0]    |
| 4   | -        | []     |

마지막에 빈 배열이 되었으므로 `[-1]`을 반환합니다.

## 내 풀이

```js
function solution(arr) {
  let i = 0;
  let stk = [];

  while (i < arr.length) {
    if (stk.length === 0) {
      stk.push(arr[i]);
      i++;
    } else if (stk[stk.length - 1] === arr[i]) {
      stk.pop();
      i++;
    } else {
      stk.push(arr[i]);
      i++;
    }
  }

  return stk.length === 0 ? [-1] : stk;
}
```

## 다른 풀이 1

i는 어차피 계속 증가시키니까 for문을 활용했다. 또한 stk가 빈 경우와, stk의 마지막 원소가 arr[i]와 다른 경우 둘 다 x에 arr[i]를 추가하니 조건문을 두개로만 사용했다.

```js
function solution(arr) {
  let stk = [];
  for (let i = 0; i < arr.length; i++) {
    if (stk[stk.length - 1] == arr[i]) {
      stk.pop();
    } else {
      stk.push(arr[i]);
    }
  }

  return stk.length !== 0 ? stk : [-1];
}
```

## 다른 풀이 2

i를 arr.length까지 증가시키면서 동작을 반복하니까 arr에 forEach문을 사용했다. splice(-1) 대신 pop()을 사용해도 될 것 같다.

```js
function solution(arr) {
  let stk = [];
  arr.forEach((x, i) => {
    if (x !== stk[stk.length - 1]) {
      stk.push(x);
    } else {
      stk.splice(-1);
    }
  });

  if (stk.length == 0) {
    stk = [-1];
  }
  return stk;
}
```
