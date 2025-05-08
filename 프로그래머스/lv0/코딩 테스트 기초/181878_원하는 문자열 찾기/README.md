## 문제 설명

알파벳으로 이루어진 문자열 `myString`과 `pat`이 주어집니다.  
`myString`의 연속된 부분 문자열 중 `pat`이 존재하면 1을, 그렇지 않으면 0을 return하는 `solution` 함수를 완성해주세요.

단, 알파벳 대문자와 소문자는 구분하지 않습니다.

## 제한사항

- 1 ≤ `myString`의 길이 ≤ 100,000
- 1 ≤ `pat`의 길이 ≤ 300
- `myString`과 `pat`은 모두 알파벳으로 이루어진 문자열입니다.

## 입출력 예

| myString  | pat     | return |
| --------- | ------- | ------ |
| "AbCdEfG" | "aBc"   | 1      |
| "aaAA"    | "aaaaa" | 0      |

## 입출력 예 설명

### 예제 #1

- `"AbCdEfG"`의 0~2번 인덱스의 문자열은 `"AbC"`이며,  
  이는 `pat`인 `"aBc"`와 같습니다(대소문자 구분 없음).  
  따라서 `1`을 return 합니다.

### 예제 #2

- `myString`의 길이가 `pat`보다 짧기 때문에 `myString`의 어떤 부분 문자열도 `pat`과 같을 수 없습니다.  
  따라서 `0`을 return 합니다.

## 내 풀이

```js
function solution(myString, pat) {
  return +myString.toLowerCase().includes(pat.toLowerCase());
}
```
