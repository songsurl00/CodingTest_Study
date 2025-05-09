## 문제 설명

정수가 있을 때, 짝수라면 반으로 나누고, 홀수라면 1을 뺀 뒤 반으로 나누면, 마지막엔 1이 됩니다.  
예를 들어 100이 있다면 다음과 같은 과정으로 1이 됩니다.

- 10 / 2 = 5
- (5 - 1) / 2 = 2
- 2 / 2 = 1

위와 같이 3번의 나누기 연산으로 1이 되었습니다.

정수들이 담긴 리스트 `num_list`가 주어질 때,  
`num_list`의 모든 원소를 1로 만들기 위해서 필요한 나누기 연산의 횟수를 `return`하도록 `solution` 함수를 완성해주세요.

## 제한사항

- 3 ≤ `num_list`의 길이 ≤ 15
- 1 ≤ `num_list`의 원소 값 ≤ 30

## 입출력 예

| num_list           | result |
| ------------------ | ------ |
| [12, 4, 15, 1, 14] | 11     |

## 입출력 예 설명

### 입출력 예 #1

- 12는 3번, 4는 2번, 15는 3번, 1은 0번, 14는 3번의 연산이 필요하기 때문에  
  총 11번의 연산이 필요합니다.

## 내 풀이

```js
function solution(num_list) {
  let count = 0;
  num_list.forEach((n) => {
    while (n !== 1) {
      n % 2 === 0 ? (n = n / 2) : (n = (n - 1) / 2);
      count++;
    }
  });
  return count;
}
```

## 다른 풀이

toString(2)로 2진수 문자열로 바꾸고 계산했다.

num_list = [12, 4, 15, 1, 14]

.map 단계:
12 → "1100".length - 1 → 3
4 → "100".length - 1 → 2
15 → "1111".length - 1 → 3
1 → "1".length - 1 → 0
14 → "1110".length - 1 → 3

.reduce 단계:
3 + 2 + 3 + 0 + 3 = 11

이런 과정을 걸쳐서 계산을 했는데 생각도 못한 접근이다...

```js
function solution(num_list) {
  return num_list.map((v) => v.toString(2).length - 1).reduce((a, c) => a + c);
}
```
