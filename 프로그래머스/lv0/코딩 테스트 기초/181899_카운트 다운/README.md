## 카운트 다운

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
function solution(start_num, end_num) {
  const answer = [];
  for (let i = start_num; i >= end_num; i--) {
    answer.push(i);
  }
  return answer;
}
```

## 다른 풀이

이 방법도 생각했었는데 순회를 2번한다고 생각해서 쓰지 않았다.
하지만 순차적 순회라 시간복잡도 문제는 없다고 한다...

```js
function solution(start, end) {
  return Array.from(Array(start - end + 1), (_, i) => start - i);
}
```
