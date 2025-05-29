## 문제 설명

두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.

## 제한사항

- 1 ≤ s1, s2의 길이 ≤ 100
- 1 ≤ s1, s2의 원소의 길이 ≤ 10
- s1과 s2의 원소는 알파벳 소문자로만 이루어져 있습니다
- s1과 s2는 각각 중복된 원소를 갖지 않습니다.

## 내 풀이

```js
function solution(s1, s2) {
  let answer = 0;

  s1.forEach((s) => {
    if (s2.includes(s)) answer++;
  });

  return answer;
}
```

## 다른 풀이

filter를 이용해 겹치는 것만 가지는 새 배열을 만들고 그 배열의 길이를 리턴했다.

```js
function solution(s1, s2) {
  const intersection = s1.filter((x) => s2.includes(x));
  return intersection.length;
}
```
