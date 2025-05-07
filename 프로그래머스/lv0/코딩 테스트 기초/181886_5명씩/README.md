## 5명씩

최대 5명씩 탑승 가능한 놀이기구를 타기 위해 줄을 서있는 사람들의 이름이 담긴 문자열 리스트 `names`가 주어질 때,  
앞에서부터 5명씩 묶은 각 그룹의 **가장 앞에 서있는 사람들의 이름**을 담은 리스트를 `return`하도록 `solution` 함수를 완성해주세요.  
마지막 그룹이 5명이 되지 않더라도, 그 그룹의 **가장 앞에 있는 사람**의 이름은 포함해야 합니다.

## 제한사항

- 5 ≤ `names`의 길이 ≤ 30
- 1 ≤ `names`의 원소 길이 ≤ 10
- `names`의 원소는 영어 알파벳 소문자로만 이루어져 있습니다.

## 입출력 예

| names                                                      | result          |
| ---------------------------------------------------------- | --------------- |
| ["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"] | ["nami", "vex"] |

## 입출력 예 설명

### 예제 #1

- 앞에서부터 5명씩 두 그룹으로 나눌 수 있습니다:
  - 그룹1: `["nami", "ahri", "jayce", "garen", "ivern"]`
  - 그룹2: `["vex", "jinx"]`
- 각 그룹의 가장 앞 사람은 `"nami"`와 `"vex"`이므로, 결과는 `["nami", "vex"]`입니다.

## 내 풀이

```js
function solution(names) {
  return names.filter((_, index) => index % 5 === 0);
}
```

## 다른 풀이

```js
function solution(names) {
  var answer = [];
  for (let i = 0; i < names.length; i += 5) {
    answer.push(names[i]);
  }
  return answer;
}
```
