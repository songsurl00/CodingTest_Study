## 문제 설명

문자열 배열 `strArr`가 주어집니다.  
모든 원소가 알파벳으로만 이루어져 있을 때,  
배열에서 **홀수번째 인덱스**의 문자열은 모두 대문자로,  
**짝수번째 인덱스**의 문자열은 모두 소문자로 바꿔서  
반환하는 `solution` 함수를 완성해주세요.

## 제한사항

- 1 ≤ `strArr` ≤ 20
- 1 ≤ `strArr`의 원소 길이 ≤ 20
- `strArr`의 원소는 알파벳으로 이루어진 문자열입니다.

## 입출력 예

| strArr                       | result                       |
| ---------------------------- | ---------------------------- |
| ["AAA", "BBB", "CCC", "DDD"] | ["aaa", "BBB", "ccc", "DDD"] |
| ["aBc", "AbC"]               | ["abc", "ABC"]               |

## 입출력 예 설명

**입출력 예 #1**

- `strArr[0]`과 `strArr[2]`는 **짝수번째 인덱스**이므로 모두 **소문자**로 바뀝니다 → "aaa", "ccc"
- `strArr[1]`과 `strArr[3]`는 **홀수번째 인덱스**이므로 **대문자** 유지 → "BBB", "DDD"

**입출력 예 #2**

- `strArr[0]`은 짝수번째 → "abc"
- `strArr[1]`은 홀수번째 → "ABC"

※ 2023년 5월 15일 제한사항이 수정되었습니다.

## 내 풀이

```js
function solution(strArr) {
  return strArr.map((str, index) =>
    index % 2 === 0 ? str.toLowerCase() : str.toUpperCase()
  );
}
```
