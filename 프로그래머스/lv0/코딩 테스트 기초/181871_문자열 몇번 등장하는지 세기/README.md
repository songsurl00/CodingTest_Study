## 문제 설명

문자열 `myString`과 `pat`가 주어집니다. `myString`의 부분 문자열 중 `pat`로 끝나는 가장 긴 부분 문자열을 찾아서 return 하는 `solution` 함수를 완성해 주세요.

## 제한사항

- 5 ≤ `myString` ≤ 20
- 1 ≤ `pat` ≤ 5
- `pat`은 반드시 `myString`의 부분 문자열로 주어집니다.
- `myString`과 `pat`에 등장하는 알파벳은 대문자와 소문자를 구분합니다.

## 입출력 예

| myString   | pat  | result     |
| ---------- | ---- | ---------- |
| "AbCdEFG"  | "dE" | "AbCdE"    |
| "AAAAaaaa" | "a"  | "AAAAaaaa" |

## 입출력 예 설명

### 입출력 예 #1

- `"AbCdEFG"`에서 `"dE"`는 한 번 등장하며 처음부터 해당 위치까지 잘라내면 `"AbCdE"`가 됩니다.
- 따라서 이 문자열이 `"dE"`로 끝나는 가장 긴 부분 문자열이며, `"AbCdE"`를 return 합니다.

### 입출력 예 #2

- `"AAAAaaaa"`에서 `"a"`는 총 네 번 등장하며 이 중 마지막에 있는 위치까지 자르면 `"AAAAaaaa"`가 됩니다.
- 따라서 이 문자열이 `"a"`로 끝나는 가장 긴 부분 문자열이며, `"AAAAaaaa"`를 return 합니다.

## 내 풀이

indexOf에 2번째 인수로 검색을 시작할 인덱스를 전달할 수 있다.

```js
function solution(myString, pat) {
  let count = 0;
  let index = myString.indexOf(pat);

  while (index !== -1) {
    count++;
    index = myString.indexOf(pat, index + 1);
  }

  return count;
}
```

## 다른 풀이

```js
function solution(myString, pat) {
  let count = 0;
  for (let i = 0; i <= myString.length - pat.length; i++) {
    if (myString.slice(i, i + pat.length) === pat) {
      count++;
    }
  }

  return count;
}
```
