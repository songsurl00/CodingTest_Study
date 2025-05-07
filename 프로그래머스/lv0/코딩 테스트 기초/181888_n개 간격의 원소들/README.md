## n개 간격의 원소들

정수 리스트 `num_list`와 정수 `n`이 주어질 때,  
`num_list`의 **첫 번째 원소부터 마지막 원소까지 `n`개 간격으로 저장되어 있는 원소들**을 차례로 담은 리스트를 `return`하도록 `solution` 함수를 완성해주세요.

## 제한사항

- 5 ≤ `num_list`의 길이 ≤ 20
- 1 ≤ `num_list`의 원소 ≤ 9
- 1 ≤ `n` ≤ 4

## 입출력 예

| num_list           | n   | result    |
| ------------------ | --- | --------- |
| [4, 2, 6, 1, 7, 6] | 2   | [4, 6, 7] |
| [4, 2, 6, 1, 7, 6] | 4   | [4, 7]    |

## 입출력 예 설명

### 예제 #1

- `[4, 2, 6, 1, 7, 6]`에서 **2개 간격**으로 저장되어 있는 원소들은 `[4, 6, 7]`입니다.

### 예제 #2

- `[4, 2, 6, 1, 7, 6]`에서 **4개 간격**으로 저장되어 있는 원소들은 `[4, 7]`입니다.

## 내 풀이

```js
function solution(num_list, n) {
  let answer = [];

  for (let i = 0; i < num_list.length; i += n) {
    answer.push(num_list[i]);
  }

  return answer;
}
```

## 다른 풀이

반복분을 사용하지 않고 filter를 사용했다.

```js
function solution(num_list, n) {
  return num_list.filter((_, i) => i % n === 0);
}
```
