## 문제 설명

정수 배열 `arr`이 매개변수로 주어집니다. `arr`의 길이가 2의 정수 거듭제곱이 되도록 `arr` 뒤에 정수 0을 추가하려고 합니다.  
`arr`에 최소한의 개수로 0을 추가한 배열을 return하는 `solution` 함수를 작성해주세요.

## 제한사항

- 1 ≤ `arr`의 길이 ≤ 1,000
- 1 ≤ `arr`의 원소 ≤ 1,000

## 입력/출력 예

| arr                | result                   |
| ------------------ | ------------------------ |
| [1, 2, 3, 4, 5, 6] | [1, 2, 3, 4, 5, 6, 0, 0] |
| [58, 172, 746, 89] | [58, 172, 746, 89]       |

## 입출력 예 설명

### 입력 예 #1

- 예제 1번의 `arr`의 길이는 6입니다.
- `arr`의 길이를 2의 정수 거듭제곱으로 만드는 방법은 0을 2개, 10개, 26개,… 추가하는 방법이 있으며  
  이 중 최소한으로 0을 추가하는 방법은 2개를 추가하는 것입니다.
- 따라서 `[1, 2, 3, 4, 5, 6, 0, 0]`을 반환합니다.

### 입력 예 #2

- 예제 2번의 `arr`의 길이는 4이고 이미 2의 정수 거듭제곱입니다.
- 따라서 뒤에 0을 추가하지 않아도 되므로 `[58, 172, 746, 89]`를 반환합니다.

## 내 풀이

n이 2의 거듭제곱이면 비트 연산자로 n & n-1 이 항상 0이 나오는 걸 알게되어 사용했다.

```js
function solution(arr) {
  while ((arr.length & (arr.length - 1)) !== 0) {
    arr.push(0);
  }
  return arr;
}
```

## 다른 풀이

Math.log2가 있다는 것을 알게괴었다.

```js
function solution(arr) {
  const length = arr.length;
  const totalLength = 2 ** Math.ceil(Math.log2(length));
  return [...arr, ...new Array(totalLength - length).fill(0)];
}
```

## 다른 풀이 2

이 풀이가 가장 직관적이고 이해가 잘 되는 풀이다.

```js
const solution = (arr) => {
  let num = 1;
  while (arr.length > num) {
    num *= 2;
  }
  while (arr.length !== num) {
    arr.push(0);
  }
  return arr;
};
```
