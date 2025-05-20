## 문제 설명

알파벳 소문자로 이루어진 문자열 `myString`이 주어집니다.  
알파벳 순서에서 `"l"`보다 앞서는 모든 문자를 `"l"`로 바꾼 문자열을 return 하는 `solution` 함수를 완성해 주세요.

## 제한사항

- 1 ≤ `myString` ≤ 100,000
- `myString`은 알파벳 소문자로 이루어진 문자열입니다.

## 입출력 예

| myString      | result        |
| ------------- | ------------- |
| "abcdexvwxyz" | "lllllvvwxyz" |
| "jjnnllkkmm"  | "llnnllllmm"  |

## 입출력 예 설명

### 입출력 예 #1

- 0 ~ 4번 인덱스의 문자 `"a"`, `"b"`, `"c"`, `"d"`, `"e"`는 각각 `"l"`보다 앞서는 문자입니다. 따라서 `"l"`로 고쳐줍니다.
- 그 외의 문자는 모두 `"l"`보다 앞서지 않는 문자입니다. 따라서 바꾸지 않습니다.
- 따라서 `"lllllvvwxyz"`를 return 합니다.

### 입출력 예 #2

- 0번, 1번, 6번, 7번 인덱스의 문자 `"j"`, `"j"`, `"k"`, `"k"`는 `"l"`보다 앞서는 문자입니다. 따라서 `"l"`로 고쳐줍니다.
- 그 외의 문자는 모두 `"l"`보다 앞서지 않는 문자입니다. 따라서 바꾸지 않습니다.
- 따라서 `"llnnllllmm"`을 return 합니다.

## 내 풀이

```js
function solution(myString) {
  return [...myString].map((char) => (char < 'l' ? 'l' : char)).join('');
}
```

## 다른 풀이

정규표현식을 이용했다. 문자열을 다룰때 정규표현식을 사용하면 확실히 빠른 것 같다.

```js
function solution(myString) {
  return myString.replace(/[a-k]/g, 'l');
}
```
