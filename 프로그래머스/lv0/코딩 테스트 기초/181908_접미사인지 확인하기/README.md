# 접미사인지 확인하기

어떤 문자열에 대해서 접미사는 특정 인덱스부터 시작하는 문자열을 의미합니다.  
예를 들어 `"banana"`의 모든 접미사는 `"banana"`, `"anana"`, `"nana"`, `"ana"`, `"na"`, `"a"`입니다.

문자열 `my_string`과 `is_suffix`가 주어질 때,  
`is_suffix`가 `my_string`의 접미사라면 `1`, 아니면 `0`을 return 하는 `solution` 함수를 작성해 주세요.

## 제한사항

- 1 ≤ `my_string`의 길이 ≤ 100
- 1 ≤ `is_suffix`의 길이 ≤ 100
- `my_string`과 `is_suffix`는 영소문자로만 이루어져 있습니다.

## 입출력 예

| my_string | is_suffix | result |
| --------- | --------- | ------ |
| "banana"  | "ana"     | 1      |
| "banana"  | "nan"     | 0      |
| "banana"  | "wxyz"    | 0      |
| "banana"  | "abanana" | 0      |

## 입출력 예 설명

**입출력 예 #1**

- 예제 1번에서 `is_suffix`가 `my_string`의 접미사이기 때문에 1을 return 합니다.

**입출력 예 #2**

- 예제 2번에서 `is_suffix`가 `my_string`의 접미사가 아니기 때문에 0을 return 합니다.

**입출력 예 #3**

- 예제 3번에서 `is_suffix`가 `my_string`의 접미사가 아니기 때문에 0을 return 합니다.

**입출력 예 #4**

- 예제 4번에서 `is_suffix`가 `my_string`의 접미사가 아니기 때문에 0을 return 합니다.

## 내 풀이

주어진 문자열의 접미사로 이루어진 배열을 생성하고 is_suffix가 해당 배열이 있는지를 숫자 타입으로 변환해 리턴했다.

```js
function solution(my_string, is_suffix) {
  const suffixArray = Array.from(my_string).map((_, i) =>
    my_string.substring(i)
  );
  return +suffixArray.includes(is_suffix);
}
```

## 다른 풀이

my_string이 is_suffix로 끝나는지 `endsWith`로 확인했다. 굳이 배열로 옮기는 동작이 없기 때문에 이 풀이가 성능적으로 더 좋을 듯 하다.

```js
function solution(my_string, is_suffix) {
  return my_string.endsWith(is_suffix) ? 1 : 0;
}
```
