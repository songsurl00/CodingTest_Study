function solution(myString, pat) {
  const str = [...myString].map((s) => (s === 'A' ? 'B' : 'A')).join('');
  return +str.includes(pat);
}
