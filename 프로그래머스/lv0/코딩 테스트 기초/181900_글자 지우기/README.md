## 글자 지우기

문자열 `my_string`과 정수 배열 `indices`가 주어질 때,  
`my_string`에서 `indices`의 원소에 해당하는 인덱스의 글자를 지우고 이어 붙인 문자열을 `return` 하는 `solution` 함수를 작성해 주세요.

## 제한사항

- `1 ≤ indices의 길이 < my_string의 길이 ≤ 100`
- `my_string`은 영소문자로만 이루어져 있습니다.
- `0 ≤ indices의 원소 < my_string의 길이`
- `indices`의 원소는 모두 서로 다릅니다.

## 입력 / 출력 예

| my_string             | indices                      | result        |
| --------------------- | ---------------------------- | ------------- |
| "apporoograpemmemprs" | [1, 16, 6, 15, 0, 10, 11, 3] | "programmers" |

## 입출력 예 설명

입출력 예 1

예제 1번의 `my_string`의 인덱스가 잘 보이도록 표로 만들면 다음과 같습니다:

| index     | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   | 10  | 11  | ... |
| --------- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| my_string | a   | p   | p   | o   | r   | o   | o   | g   | r   | a   | p   | e   | ... |

`indices`에 있는 인덱스의 글자들을 지우고 이어붙이면 `"programmers"`가 되므로 이를 `return` 합니다.

## 내 풀이

문자열을 배열로 만든 다음에 해당 인덱스의 요소를 빈 문자열로 바꾸고 합쳐서 출력했다.

```js
function solution(my_string, indices) {
  const answer = [...my_string];
  indices.forEach((i) => {
    answer.splice(i, 1, '');
  });

  return answer.join('');
}
```

## 다른 풀이

배열에 해당 인덱스에 해당하지 않는 요소들만 남기고 합쳐서 출력했다.

```js
function solution(my_string, indices) {
  return [...my_string].filter((_, i) => !indices.includes(i)).join('');
}
```
