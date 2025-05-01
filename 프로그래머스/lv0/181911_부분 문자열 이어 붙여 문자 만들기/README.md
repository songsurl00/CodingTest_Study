# 부분 문자열 이어 붙여 문자 만들기

길이가 같은 문자열 배열 `my_strings`와 이차원 정수 배열 `parts`가 매개변수로 주어집니다.  
`parts[i]`는 [s, e] 형태로, `my_strings[i]`의 인덱스 s부터 인덱스 e까지의 부분 문자열을 의미합니다.  
각 `my_strings`의 원소의 `parts`에 해당하는 부분 문자열을 순서대로 이어 붙인 문자열을 return 하는 `solution` 함수를 작성해 주세요.

## 제한사항

- 1 ≤ `my_strings`의 길이 = `parts`의 길이 ≤ 100
- 1 ≤ `my_strings`의 원소의 길이 ≤ 100
- `parts[i]`를 [s, e]라 할 때, 다음을 만족합니다.
  - 0 ≤ s ≤ e < `my_strings[i]`의 길이

## 입출력 예

| my_strings                                            | parts                            | result        |
| ----------------------------------------------------- | -------------------------------- | ------------- |
| ["progressive", "hamburger", "hammer", "ahocorasick"] | [[0, 4], [1, 2], [3, 5], [7, 7]] | "programmers" |

## 입출력 예 설명

입출력 예 #1

- 예제 1번의 입력을 보기 좋게 표로 나타내면 다음과 같습니다.

<table>
  <thead>
    <tr>
      <th>i</th>
      <th>my_strings[i]</th>
      <th>parts[i]</th>
      <th>부분 문자열</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td>
      <td>"progressive"</td>
      <td>[0, 4]</td>
      <td>"progr"</td>
    </tr>
    <tr>
      <td>1</td>
      <td>"hamburger"</td>
      <td>[1, 2]</td>
      <td>"am"</td>
    </tr>
    <tr>
      <td>2</td>
      <td>"hammer"</td>
      <td>[3, 5]</td>
      <td>"mer"</td>
    </tr>
    <tr>
      <td>3</td>
      <td>"ahocorasick"</td>
      <td>[7, 7]</td>
      <td>"s"</td>
    </tr>
  </tbody>
</table>

각 부분 문자열을 순서대로 이어 붙인 문자열은 `"programmers"`입니다.  
따라서 `"programmers"`를 return 합니다.

## 풀이 코드

```js
function solution(my_strings, parts) {
  return parts
    .map(([s, e], index) => my_strings[index].slice(s, e + 1))
    .join('');
}
```
