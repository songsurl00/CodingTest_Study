## 문제 설명

영소문자로 이루어진 문자열 `my_string`과  
영소문자 1글자로 이루어진 문자열 `alp`가 매개변수로 주어질 때,  
`my_string`에서 `alp`에 해당하는 모든 글자를 대문자로 바꾼 문자열을  
return 하는 `solution` 함수를 작성해주세요.

## 제한사항

- 1 ≤ `my_string`의 길이 ≤ 1,000

## 입출력 예

| my_string     | alp | result        |
| ------------- | --- | ------------- |
| "programmers" | "p" | "Programmers" |
| "lowercase"   | "x" | "lowercase"   |

## 입출력 예 설명

**입출력 예 #1**

- `my_string`이 "programmers"이고 `alp`가 "p"이므로  
  모든 'p'를 대문자 'P'로 바꾼 "Programmers"를 return 합니다.

**입출력 예 #2**

- `alp`가 "x"이고, `my_string`에는 "x"가 존재하지 않으므로  
  원래 문자열 그대로인 "lowercase"를 return 합니다.

## 내 풀이

```js
function solution(my_string, alp) {
  return my_string.replaceAll(alp, alp.toUpperCase());
}
```
