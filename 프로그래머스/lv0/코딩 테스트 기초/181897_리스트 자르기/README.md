## 리스트 자르기

정수 `n`과 정수 3개가 담긴 리스트 `slicer`, 그리고 정수 여러 개가 담긴 리스트 `num_list`가 주어집니다.  
`slicer`에 담긴 정수를 차례대로 `a`, `b`, `c`라고 할 때,  
`n`에 따라 다음과 같이 `num_list`를 슬라이싱하려고 합니다:

- `n = 1`: `num_list`의 0번 인덱스부터 `b`번 인덱스까지
- `n = 2`: `num_list`의 `a`번 인덱스부터 마지막 인덱스까지
- `n = 3`: `num_list`의 `a`번 인덱스부터 `b`번 인덱스까지
- `n = 4`: `num_list`의 `a`번 인덱스부터 `b`번 인덱스까지 `c` 간격으로

올바르게 슬라이싱한 리스트를 `return`하도록 `solution` 함수를 작성해주세요.

## 제한사항

- `n`은 1, 2, 3, 4 중 하나입니다.
- `slicer`의 길이는 3
- `slicer`에 담긴 정수를 차례대로 `a`, `b`, `c`라고 할 때
  - `0 ≤ a ≤ b ≤ num_list의 길이 - 1`
  - `1 ≤ c ≤ 3`
- `5 ≤ num_list의 길이 ≤ 30`
- `0 ≤ num_list의 원소 ≤ 100`

## 입력 / 출력 예

| n   | slicer    | num_list                    | result          |
| --- | --------- | --------------------------- | --------------- |
| 3   | [1, 5, 2] | [1, 2, 3, 4, 5, 6, 7, 8, 9] | [2, 3, 4, 5, 6] |
| 4   | [1, 5, 2] | [1, 2, 3, 4, 5, 6, 7, 8, 9] | [2, 4, 6]       |

## 입출력 예 설명

입출력 예 1

- `[1, 2, 3, 4, 5, 6, 7, 8, 9]`에서 1번 인덱스부터 5번 인덱스까지 자른 리스트는 `[2, 3, 4, 5, 6]`입니다.

입출력 예 2

- 같은 리스트에서 1번 인덱스부터 5번 인덱스까지 2칸 간격으로 자른 리스트는 `[2, 4, 6]`입니다.

## 내 풀이

```js
function solution(n, slicer, num_list) {
  const [a, b, c] = slicer;

  if (n === 1) {
    return num_list.slice(0, b + 1);
  }

  if (n === 2) {
    return num_list.slice(a);
  }

  if (n === 3) {
    return num_list.slice(a, b + 1);
  }

  if (n === 4) {
    return num_list.slice(a, b + 1).filter((_, i) => i % c === 0);
  }
}
```

## 다른 풀이

switch 문을 활용했고 !(idx % 2) 로 간단하게 표현했다. 배열 구조 분해 할당은 내가 한 방식대로 해도 될 것 같다.

```js
function solution(n, slicer, num_list) {
  let [a, b, c] = [...slicer];

  switch (n) {
    case 1:
      return num_list.slice(0, b + 1);
    case 2:
      return num_list.slice(a);
    case 3:
      return num_list.slice(a, b + 1);
    case 4:
      return num_list.slice(a, b + 1).filter((_, idx) => !(idx % c));
  }
}
```
