## 가까운 1 찾기

정수 `start_num`과 `end_num`가 주어질 때,  
`start_num`에서 `end_num`까지 1씩 감소하는 수들을 차례로 담은 리스트를 `return` 하도록 `solution` 함수를 완성해주세요.

## 제한사항

- `0 ≤ end_num ≤ start_num ≤ 50`

## 입력 / 출력 예

| start_num | end_num | result                    |
| --------- | ------- | ------------------------- |
| 10        | 3       | [10, 9, 8, 7, 6, 5, 4, 3] |

## 입출력 예 설명

입출력 예 1

- 10부터 3까지 1씩 감소하는 수를 담은 리스트는 `[10, 9, 8, 7, 6, 5, 4, 3]`입니다.

## 내 풀이

```js
function solution(arr, idx) {
  let answer;
  for (let i = idx; i < arr.length; i++) {
    if (arr[i] === 1) {
      return i;
    }
  }
  return -1;
}
```

## 다른 풀이

indexOf를 사용했다. 두번째 인수로 검색을 시작할 인덱스를 줄 수 있다는걸 생각못했다.

```js
const solution = (a, i) => a.indexOf(1, i);
```
