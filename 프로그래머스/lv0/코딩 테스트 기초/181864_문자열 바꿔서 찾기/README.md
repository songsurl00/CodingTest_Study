## 문제 설명

문자 `"A"`와 `"B"`로 이루어진 문자열 `myString`과 `pat`가 주어집니다.  
`myString`의 `"A"`를 `"B"`로, `"B"`를 `"A"`로 바꾼 문자열에서  
`pat`이 연속해서 나타나는 부분 문자열 중 하나라도 있으면 `1`을,  
그렇지 않으면 `0`을 `return` 하는 `solution` 함수를 완성하세요.

---

## 제한사항

- 1 ≤ `myString`의 길이 ≤ 100
- 1 ≤ `pat`의 길이 ≤ 10
- `myString`과 `pat`는 문자 `"A"`와 `"B"`로만 이루어진 문자열입니다.

---

## 입출력 예

| myString  | pat      | result |
| --------- | -------- | ------ |
| `"ABBAA"` | `"AABB"` | `1`    |
| `"ABAB"`  | `"ABAB"` | `0`    |

---

## 입출력 예 설명

**입출력 예 #1**

- `"ABBAA"`에서 `"A"`와 `"B"`를 서로 바꾸면 `"BAABB"`가 됩니다.
- 이 문자열에는 `"AABB"`라는 부분 문자열이 존재하므로 `1`을 반환합니다.

**입출력 예 #2**

- `"ABAB"`에서 `"A"`와 `"B"`를 서로 바꾸면 `"BABA"`가 됩니다.
- 이 문자열에는 `"ABAB"`라는 부분 문자열이 존재하지 않으므로 `0`을 반환합니다.

---

※ 2023년 05월 15일 제한사항 및 테스트 케이스가 수정되었습니다.  
기존에 제출한 코드는 통과하지 못할 수 있습니다.

## 내 풀이

```js
function solution(myString, pat) {
  const str = [...myString].map((s) => (s === 'A' ? 'B' : 'A')).join('');
  return +str.includes(pat);
}
```
