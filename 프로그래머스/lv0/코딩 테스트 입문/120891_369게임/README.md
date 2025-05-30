## 문제 설명

머쓱이는 친구들과 369게임을 하고 있습니다. 369게임은 1부터 숫자를 하나씩 대며 3, 6, 9가 들어가는 숫자는 숫자 대신 3, 6, 9의 개수만큼 박수를 치는 게임입니다. 머쓱이가 말해야하는 숫자 order가 매개변수로 주어질 때, 머쓱이가 쳐야할 박수 횟수를 return 하도록 solution 함수를 완성해보세요.

## 제한사항

- 1 ≤ order ≤ 1,000,000

## 내 풀이

```js
function solution(order) {
  return [...order.toString()].reduce(
    (acc, cur) => (cur === '3' || cur === '6' || cur === '9' ? acc + 1 : acc),
    0
  );
}
```

## 다른 풀이1

정규표현식으로 369에 해당하는 숫자의 갯수를 구했다.

```js
function solution(order) {
  var answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
  return answer;
}
```

## 다른 풀이1

Set 자료구조로 3, 6, 9를 만들고 검색을 했다.
Set 자료구조는 검색 속도가 빠르다는 장점이 있다고 한다.

```js
function solution(order) {
  const mySet = new Set([3, 6, 9]);
  return String(order)
    .split('')
    .filter((num) => mySet.has(Number(num))).length;
}
```
