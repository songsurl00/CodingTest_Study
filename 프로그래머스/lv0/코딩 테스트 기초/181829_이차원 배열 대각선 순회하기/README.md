## 문제 설명

2차원 정수 배열 `board`와 정수 `k`가 주어집니다.  
`i + j <= k`를 만족하는 모든 (i, j)에 대해 `board[i][j]`의 합을 return 하는 `solution` 함수를 완성해 주세요.

## 제한사항

- 1 ≤ `board`의 길이 ≤ 100
- 1 ≤ `board[i]`의 길이 ≤ 100
- 1 ≤ `board[i][j]` ≤ 10,000
- 모든 `board[i]`의 길이는 같습니다.
- 0 ≤ k < `board`의 길이 + `board[i]`의 길이

## 입력값 예

| board                                          | k   | result |
| ---------------------------------------------- | --- | ------ |
| `[[0, 1, 2], [1, 2, 3], [2, 3, 4], [3, 4, 5]]` | 2   | 8      |

## 입력값 예 설명

### 입력값 예 #1

입력값 예 #1의 `board`를 표로 나타내면 다음과 같습니다:

| i \ j | 0   | 1   | 2   |
| ----- | --- | --- | --- |
| 0     | 0   | 1   | 2   |
| 1     | 1   | 2   | 3   |
| 2     | 2   | 3   | 4   |
| 3     | 3   | 4   | 5   |

- `i + j`가 2보다 작거나 같은 위치의 값들은:  
  `board[0][0]` = 0  
  `board[0][1]` = 1  
  `board[0][2]` = 2  
  `board[1][0]` = 1  
  `board[1][1]` = 2  
  `board[2][0]` = 2
- 이 값들의 합은 `0 + 1 + 2 + 1 + 2 + 2 = 8`  
  따라서 `8`을 return 합니다.

## 내 풀이

```js
function solution(board, k) {
  let result = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (i + j <= k) result += board[i][j];
    }
  }

  return result;
}
```

## 다른 풀이

reduce를 중첩해서 해결했다.

```js
function solution(board, k) {
  return board.reduce(
    (total, row, i) =>
      total + row.reduce((prev, num, j) => (i + j <= k ? prev + num : prev), 0),
    0
  );
}
```
