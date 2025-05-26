## 문제 설명

숫자와 "Z"가 공백으로 구분되어 담긴 문자열이 주어집니다. 문자열에 있는 숫자를 차례대로 더하려고 합니다. 이 때 "Z"가 나오면 바로 전에 더했던 숫자를 뺀다는 뜻입니다. 숫자와 "Z"로 이루어진 문자열 s가 주어질 때, 머쓱이가 구한 값을 return 하도록 solution 함수를 완성해보세요.

## 제한사항

- 1 ≤ s의 길이 ≤ 200
- -1,000 < s의 원소 중 숫자 < 1,000
- s는 숫자, "Z", 공백으로 이루어져 있습니다.
- s에 있는 숫자와 "Z"는 서로 공백으로 구분됩니다.
- 연속된 공백은 주어지지 않습니다.
- 0을 제외하고는 0으로 시작하는 숫자는 없습니다.
- s는 "Z"로 시작하지 않습니다.
- s의 시작과 끝에는 공백이 없습니다.
- "Z"가 연속해서 나오는 경우는 없습니다.

## 내 풀이

s를 공백을 기준으로 나누고 이전 값을 저장했다가 Z가 나오면 저장했던 이전 값을 빼는 식으로 풀었다.

```js
function solution(s) {
  let prev;
  const answer = s.split(' ');

  return answer.reduce((acc, cur) => {
    if (cur === 'Z') return acc - prev;
    prev = +cur;
    return acc + +cur;
  }, 0);
}
```

## 다른 풀이

stack 자료구조를 이용해서 값들을 집어넣고, Z가 나오면 가장 최근값인 이전값을 뺴는 식으로 저장한 후에, stack에 들어있는 값들의 총 합을 계산했다.

```js
function solution(s) {
  const stack = [];

  s.split(' ').forEach((target) => {
    if (target === 'Z') stack.pop();
    else stack.push(+target);
  });

  return stack.length ? stack.reduce((pre, cur) => pre + cur) : 0;
}
```
