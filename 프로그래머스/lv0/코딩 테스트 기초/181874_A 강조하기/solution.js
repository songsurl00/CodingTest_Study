function solution(myString) {
  return [...myString]
    .map((str) =>
      str === 'a' ? str.toUpperCase() : str !== 'A' ? str.toLowerCase() : str
    )
    .join('');
}
