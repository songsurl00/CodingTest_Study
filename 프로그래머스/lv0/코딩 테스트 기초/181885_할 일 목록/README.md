## 문제 설명

오늘 해야 할 일이 담긴 문자열 배열 `todo_list`와  
각각의 일을 지금 마쳤는지를 나타내는 boolean 배열 `finished`가 주어질 때,  
`todo_list`에서 **아직 마치지 못한 일들**을 순서대로 담은 문자열 배열을 `return`하는 `solution` 함수를 작성해주세요.

## 제한사항

- 1 ≤ `todo_list`의 길이 ≤ 100
- 2 ≤ `todo_list`의 원소 길이 ≤ 20
- `todo_list`의 원소는 **영소문자**로만 이루어져 있습니다.
- `todo_list`의 원소는 **서로 다릅니다.**
- `finished[i]`는 `true` 또는 `false`이며,
  - `true`: `todo_list[i]`는 **마친 일**
  - `false`: `todo_list[i]`는 **아직 마치지 못한 일**
- **아직 마치지 못한 일이 반드시 존재합니다.**

## 입출력 예

| todo_list                                                  | finished                   | result                           |
| ---------------------------------------------------------- | -------------------------- | -------------------------------- |
| ["problemsolving", "practiceguitar", "swim", "studygraph"] | [true, false, true, false] | ["practiceguitar", "studygraph"] |

## 입출력 예 설명

### 예제 #1

- `"problemsolving"`과 `"swim"`은 `true`이므로 **마친 일**
- `"practiceguitar"`와 `"studygraph"`는 `false`이므로 **아직 마치지 못한 일**
- 따라서 결과는 `["practiceguitar", "studygraph"]`입니다.

## 내 풀이

```js
function solution(todo_list, finished) {
  let answer = [];
  finished.forEach((item, index) => {
    if (!item) answer.push(todo_list[index]);
  });

  return answer;
}
```

## 다른 풀이

```js
function solution(todo_list, finished) {
  return todo_list.filter((e, i) => !finished[i]);
}
```
