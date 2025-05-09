## 배열 조각하기

정수 배열 `arr`와 `query`가 주어집니다.  
`query`를 순회하면서 다음 작업을 반복합니다:

- 짝수 인덱스에서는  
  `arr`에서 `query[i]`번 인덱스를 제외하고, 배열의 `query[i]`번 인덱스 **뒷부분**을 잘라서 버립니다.

- 홀수 인덱스에서는  
  `arr`에서 `query[i]`번 인덱스를 제외하고, 배열의 `query[i]`번 인덱스 **앞부분**을 잘라서 버립니다.

위 작업을 모두 마친 후 남은 `arr`의 부분 배열을 `return`하는 `solution` 함수를 작성해 주세요.

## 제한사항

- `5 ≤ arr의 길이 ≤ 100,000`
  - `0 ≤ arr의 원소 ≤ 100`
- `1 ≤ query의 길이 < min(50, arr의 길이 / 2)`
  - `query`의 각 원소는 `0`보다 크거나 같고, 남아있는 `arr`의 길이보다 작습니다.

## 입력 / 출력 예

| arr                | query     | result    |
| ------------------ | --------- | --------- |
| [0, 1, 2, 3, 4, 5] | [4, 1, 2] | [1, 2, 3] |

## 입출력 예 설명

- `query[0] = 4`: 짝수 인덱스이므로 **4번 인덱스 기준 뒷부분 제거** → `[0, 1, 2, 3, 4]`
- `query[1] = 1`: 홀수 인덱스이므로 **1번 인덱스 기준 앞부분 제거** → `[1, 2, 3, 4]`
- `query[2] = 2`: 짝수 인덱스이므로 **2번 인덱스 기준 뒷부분 제거** → `[1, 2, 3]`

따라서 최종 결과는 `[1, 2, 3]`입니다.

## 내 풀이

```js
function solution(arr, query) {
  query.forEach((i, index) => {
    index % 2 === 0 ? (arr = arr.slice(0, i + 1)) : (arr = arr.slice(i));
  });

  return arr;
}
```
