## 문제 설명

정수 n이 매개변수로 주어질 때, n의 약수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.

## 제한사항

- 1 ≤ n ≤ 10,000

## 내 풀이

```js
function solution(n) {
  let i = 1;
  const answer = [];

  while (i <= n) {
    if (n % i === 0) answer.push(i);
    i++;
  }

  return answer;
}
```

## 다른 풀이

1 ~ n까지의 배열을 만들고 약수들만 filter로 필터링했다.

```js
function solution(n) {
  return Array(n)
    .fill(0)
    .map((v, index) => v + index + 1)
    .filter((v) => n % v === 0);
}
```
