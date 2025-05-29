## 문제 설명

문자열 s가 매개변수로 주어집니다. s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요. 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.

## 제한사항

- 0 < s의 길이 < 1,000
- s는 소문자로만 이루어져 있습니다.

## 내 풀이

Map 객체를 만들어 각 요소와 요소의 갯수를 key value로 저장하고. 1번만 나오는 것들만 배열에 저장해 정렬했다.

```js
function solution(s) {
  const map = new Map();
  const answer = [];

  [...s].forEach((e) => {
    map.set(e, map.get(e) ? map.get(e) + 1 : 1);
  });

  map.forEach((v, k) => {
    if (v === 1) answer.push(k);
  });

  return answer.sort().join('');
}
```

## 다른 풀이

indexOf(c) 와 lastIndexOf(c)가 같은 경우는 요소가 한번만 나오는 경우이므로 이걸 배열에 저장했다.

```js
function solution(s) {
  let res = [];
  for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
  return res.sort().join('');
}
```
