## 홀수 vs 짝수

정수 리스트 `num_list`가 주어집니다.  
가장 첫 번째 원소를 1번 원소라고 할 때,  
**홀수 번째 원소들의 합과 짝수 번째 원소들의 합 중 더 큰 값을 return** 하도록 `solution` 함수를 완성해주세요.  
두 값이 같을 경우, 그 값을 return 합니다.

## 제한사항

- 5 ≤ `num_list`의 길이 ≤ 50
- -9 ≤ `num_list`의 원소 ≤ 9

## 입출력 예

| num_list           | result |
| ------------------ | ------ |
| [4, 2, 6, 1, 7, 6] | 17     |
| [-1, 2, 5, 6, 3]   | 8      |

## 입출력 예 설명

### 예제 #1

- 홀수 번째 원소들의 합 = 4 + 6 + 7 = 17
- 짝수 번째 원소들의 합 = 2 + 1 + 6 = 9  
  ➡ 더 큰 값인 17을 return 합니다.

### 예제 #2

- 홀수 번째 원소들의 합 = -1 + 5 + 3 = 7
- 짝수 번째 원소들의 합 = 2 + 6 = 8  
  ➡ 더 큰 값인 8을 return 합니다.

## 내 풀이

```js
function solution(num_list) {
  const odd = num_list.reduce(
    (acc, cur, index) => (index % 2 === 1 ? (acc += cur) : acc),
    0
  );
  const even = num_list.reduce(
    (acc, cur, index) => (index % 2 === 0 ? (acc += cur) : acc),
    0
  );

  return Math.max(odd, even);
}
```

## 다른 풀이

배열을 굳이 두번 순회하지 않는 이 방법이 더 좋을 듯 하다.

```js
function solution(num_list) {
  let even = 0;
  let odd = 0;

  num_list.map((v, idx) => {
    !(idx % 2) ? (even += v) : (odd += v);
  });

  return odd > even ? odd : even;
}
```
