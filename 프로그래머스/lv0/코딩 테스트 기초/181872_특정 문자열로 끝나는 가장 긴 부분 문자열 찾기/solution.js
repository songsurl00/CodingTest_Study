function solution(myString, pat) {
  const n = myString.lastIndexOf(pat);
  return myString.slice(0, n + pat.length);
}
