## 문제 설명

알파벳으로 이루어진 문자열 `myString`이 주어집니다.  
모든 알파벳을 **소문자**로 변환하여 return하는 `solution` 함수를 완성해주세요.

## 제한사항

- 1 ≤ `myString`의 길이 ≤ 100,000
  - `myString`은 알파벳으로 이루어진 문자열입니다.

## 입출력 예

| myString  | result    |
| --------- | --------- |
| "aBcDeFg" | "abcdefg" |
| "aaa"     | "aaa"     |

## 내 풀이

```js
function solution(myString) {
  return myString.toLowerCase();
}
```
