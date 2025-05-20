## 문제 설명

팀의 막내인 철수는 아메리카노와 카페 라떼만 판매하는 카페에서 팀원들의 커피를 사려고 합니다.  
아메리카노와 카페 라떼의 가격은 각각 차갑든 따뜻하든 상관없이 각각 4500원, 5000원입니다.  
각 팀원에게 마실 메뉴를 물어보려고 하였고, 그 중에서 메뉴를 적은 팀원이 있을 수도 있고, "아무거나"를 적은 팀원이 있을 수도 있습니다.  
"아무거나"를 적은 팀원의 것은 아메리카노로 통일하기로 하였습니다.

각 직원이 적은 메뉴가 문자열 배열 `order`로 주어질 때, 커피를 결제하게 될 금액을 return 하는 `solution` 함수를 작성해주세요.  
`order`의 원소는 아래의 것들만 들어오며, 각각의 의미는 다음과 같습니다:

| order의 원소                   | 의미                         |
| ------------------------------ | ---------------------------- |
| "iceamericano", "americanoice" | 차가운 아메리카노            |
| "hotamericano", "americanohot" | 따뜻한 아메리카노            |
| "icecafelatte", "cafelatteice" | 차가운 카페 라떼             |
| "hotcafelatte", "cafelattehot" | 따뜻한 카페 라떼             |
| "americano"                    | 아메리카노                   |
| "cafelatte"                    | 카페 라떼                    |
| "anything"                     | 아무거나 → 아메리카노로 간주 |

## 제한사항

- 1 ≤ `order`의 길이 ≤ 1,000

## 입출력 예

| order                                                     | result |
| --------------------------------------------------------- | ------ |
| ["cafelatte", "americanoice", "hotcafelatte", "anything"] | 19000  |
| ["americanoice", "americano", "iceamericano"]             | 13500  |

## 입출력 예 설명

### 입출력 예 #1

| 팀원의 적은 음료 | 실제 주문 음료 | 가격 |
| ---------------- | -------------- | ---- |
| cafelatte        | 카페 라떼      | 5000 |
| americanoice     | 아메리카노     | 4500 |
| hotcafelatte     | 카페 라떼      | 5000 |
| anything         | 아메리카노     | 4500 |

총 주문은 아메리카노 2잔, 카페 라떼 2잔 → 2 × 4500 + 2 × 5000 = 19000원 → return 19000

### 입출력 예 #2

모든 음료가 아메리카노로 해석됨 → 3 × 4500 = 13500 → return 13500

## 내 풀이

```js
function solution(order) {
  return order.reduce(
    (acc, cur) => (cur.includes('latte') ? acc + 5000 : acc + 4500),
    0
  );
}
```

## 다른 풀이

같은 방식의 풀이지만 조건문을 최소화했다.

```js
function solution(order) {
  return order.reduce(
    (acc, cur) => acc + (cur.includes('latte') ? 5000 : 4500),
    0
  );
}
```
