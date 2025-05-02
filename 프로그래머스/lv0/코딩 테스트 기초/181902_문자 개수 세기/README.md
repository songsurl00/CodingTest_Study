## 문자 개수 세기

알파벳 대소문자로만 이루어진 문자열 `my_string` 이 주어질 때,  
`my_string` 에서 `'A'`의 개수, `my_string` 에서 `'B'`의 개수, ..., `my_string` 에서 `'Z'`의 개수,  
`my_string` 에서 `'a'`의 개수, `my_string` 에서 `'b'`의 개수, ..., `my_string` 에서 `'z'`의 개수를  
순서대로 담은 길이 52의 정수 배열을 `return` 하는 `solution` 함수를 작성해 주세요.

## 제한사항

- `1 ≤ my_string 의 길이 ≤ 1,000`

## 입력 / 출력 예

| my_string     | result                                                                                                                                                       |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| "Programmers" | [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 1, 0, 0, 3] |

## 입출력 예 설명

입출력 예 1  
예제 1번의 `my_string` 에서

- `'P'`가 1개
- `'a'`가 1개
- `'e'`가 1개
- `'g'`가 1개
- `'m'`이 2개
- `'o'`가 1개
- `'r'`이 3개
- `'s'`가 1개

따라서 결과는  
`[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 1, 0, 0, 3]`  
를 `return` 합니다.

## 내 풀이

대문자 소문자로 이루어진 문자열을 만들고 배열로 순회시켜 같은 문자의 개수로 바꿨다.

```js
function solution(my_string) {
  const alpa = 'abcdefghijklmnopqrstuvwxyz';
  const Upper = alpa.toUpperCase();
  const total = Upper + alpa;

  const arr = [...total].map((item) => {
    return [...my_string].filter((s) => s === item).length;
  });

  return arr;
}
```

## 다른 풀이

0으로 채워진 배열을 만들고 해당 문자가 있는 index의 수를 증가시켰다.

```js
function solution(m) {
  let al = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let a = [];
  a.length = 52;
  a.fill(0);

  m.split('').map((n) => {
    a[al.indexOf(n)] += 1;
  });

  return a;
}
```
