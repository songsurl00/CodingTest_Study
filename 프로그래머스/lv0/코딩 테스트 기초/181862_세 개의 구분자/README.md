## 문제 설명

임의의 문자열이 주어졌을 때 문자 `"a"`, `"b"`, `"c"`를 구분자로 사용해 문자열을 나누고자 합니다.

예를 들어 주어진 문자열이 `"baconlettucetomato"`라면 나눠진 문자열 목록은 `["onlettu", "etom", "to"]`가 됩니다.

문자열 `myStr`이 주어졌을 때 위 예시와 같이 `"a"`, `"b"`, `"c"`를 사용해 나눠진 문자열을 순서대로 저장한 배열을 반환하는 `solution` 함수를 완성해주세요.

단, 두 구분자 사이에 다른 문자가 없을 경우에는 아무것도 저장하지 않으며, 반환할 배열이 빈 배열이라면 `["EMPTY"]`를 반환합니다.

## 제한 사항

- 1 ≤ `myStr`의 길이 ≤ 1,000,000
- `myStr`은 알파벳 소문자로 이루어진 문자열입니다.

## 입력/출력 예

| myStr                | result                    |
| -------------------- | ------------------------- |
| "baconlettucetomato" | ["onlettu", "etom", "to"] |
| "abcd"               | ["d"]                     |
| "cabab"              | ["EMPTY"]                 |

## 입출력 예 설명

### 예시 #1

- 문제 설명의 예시와 같습니다.

### 예시 #2

- `"c"` 이전에는 `"a"`, `"b"`, `"c"` 이외의 문자가 없습니다.
- `"c"` 이후에 `"d"`가 있으므로 `"d"`를 저장합니다.
- 따라서 `["d"]`를 반환합니다.

### 예시 #3

- `"a"`, `"b"`, `"c"` 이외의 문자가 존재하지 않습니다.
- 따라서 저장할 문자열이 없으므로 `["EMPTY"]`를 반환합니다.

## 내 풀이

```js
function solution(myStr) {
  let answer = myStr
    .replaceAll('a', ' ')
    .replaceAll('b', ' ')
    .replaceAll('c', ' ');
  answer = answer.split(/\s/g).filter((s) => s);
  return answer.length === 0 ? ['EMPTY'] : answer;
}
```

## 다른 풀이

a,b,c를 정규표현식으로 나누면 간단한 문제였다. 정규표현식을 공부해야겠다.

```js
function solution(myStr) {
  const list = myStr.split(/[a|b|c]/).filter((str) => str);
  return list.length ? list : ['EMPTY'];
}
```
