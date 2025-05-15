## 문제 설명

`m`과 `"rn"`의 모양이 비슷하게 생긴 점을 활용해 문자열에 장난을 하려고 합니다.  
문자열 `rny_string`이 주어질 때, `rny_string`의 모든 `'m'`을 `"rn"`으로 바꾼 문자열을 return 하는 `solution` 함수를 작성해 주세요.

---

## 제한사항

- 1 ≤ `rny_string`의 길이 ≤ 100
- `rny_string`은 영소문자로만 이루어져 있습니다.

---

## 입출력 예

| rny_string    | result           |
| ------------- | ---------------- |
| "masterpiece" | "rnasterpiece"   |
| "programmers" | "prograrnrnerrs" |
| "jerry"       | "jerry"          |
| "burn"        | "burn"           |

---

## 입출력 예 설명

**입출력 예 #1**

- `rny_string`의 `'m'`을 `"rn"`으로 바꾸면 `"rnasterpiece"`가 됩니다.

**입출력 예 #2**

- `rny_string`의 `'m'`을 `"rn"`으로 바꾸면 `"prograrnrnerrs"`가 됩니다.

**입출력 예 #3**

- `rny_string`에는 `'m'`이 없습니다. 따라서 `"jerry"`를 그대로 return 합니다.

**입출력 예 #4**

- `rny_string`에는 `'m'`이 없습니다. 따라서 `"burn"`을 그대로 return 합니다.

## 내 풀이

```js
function solution(rny_string) {
  return rny_string.replaceAll('m', 'rn');
}
```
