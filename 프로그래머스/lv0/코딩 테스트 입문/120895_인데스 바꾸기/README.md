## 문제 설명

영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다. 문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.

## 제한사항

- numbers는 소문자로만 구성되어 있습니다.
- numbers는 "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" 들이 공백 없이 조합되어 있습니다.
- 1 ≤ numbers의 길이 ≤ 50
- "zero"는 numbers의 맨 앞에 올 수 없습니다.

## 내 풀이

```js
function solution(my_string, num1, num2) {
  const str1 = my_string[num1];
  const str2 = my_string[num2];
  const answer = [...my_string];

  answer[num1] = str2;
  answer[num2] = str1;

  return answer.join('');
}
```

## 다른 풀이

구조분해할당을 통해 값을 바꿨다.

```js
function solution(my_string, num1, num2) {
  my_string = my_string.split('');
  [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
  return my_string.join('');
}
```
