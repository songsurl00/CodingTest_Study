## 문제 설명

my_string은 "3 + 5"처럼 문자열로 된 수식입니다. 문자열 my_string이 매개변수로 주어질 때, 수식을 계산한 값을 return 하는 solution 함수를 완성해주세요.

## 제한사항

- 연산자는 `+`, `-`만 존재합니다.
- 문자열의 시작과 끝에는 공백이 없습니다.
- 0으로 시작하는 숫자는 주어지지 않습니다.
- 잘못된 수식은 주어지지 않습니다.
- `5 ≤ my_string`의 길이 `≤ 100`
- `my_string`을 계산한 결과값은 1 이상 100,000 이하입니다.
  - `my_string`의 중간 계산 값은 -100,000 이상 100,000 이하입니다.
  - 계산에 사용하는 숫자는 1 이상 20,000 이하인 자연수입니다.
  - `my_string`에는 연산자가 적어도 하나 포함되어 있습니다.
- return type은 정수형입니다.
- `my_string`의 숫자와 연산자는 공백 하나로 구분되어 있습니다.

## 내 풀이

```js
function solution(my_string) {
  const answer = my_string.split(' ');
  let result = 0;

  return answer.reduce(
    (acc, cur, index) =>
      cur === '+'
        ? acc + +answer[index + 1]
        : cur === '-'
        ? acc - +answer[index + 1]
        : acc,
    +answer[0]
  );
}
```

## 다른 풀이

연산자가 +, - 만 존재하기 때문에 +, - 에 따라 다음 수의 부호를 결정해서 저장하고 나중에 더했다.

```js
function solution(my_string) {
  const stack = [];

  let sign = 1;
  for (const ch of my_string.split(' ')) {
    if (ch === '+') {
      sign = 1;
    } else if (ch === '-') {
      sign = -1;
    } else {
      stack.push(ch * sign);
    }
  }

  return stack.reduce((a, b) => a + b, 0);
}
```
