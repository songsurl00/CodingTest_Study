function solution(a, b) {
  const aisOdd = a % 2 !== 0;
  const bisOdd = b % 2 !== 0;

  if (aisOdd && bisOdd) return a ** 2 + b ** 2;
  if (aisOdd || bisOdd) return 2 * (a + b);
  return Math.abs(a - b);
}
