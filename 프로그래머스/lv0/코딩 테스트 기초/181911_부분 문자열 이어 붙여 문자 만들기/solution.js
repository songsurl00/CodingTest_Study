function solution(my_strings, parts) {
  return parts
    .map(([s, e], index) => my_strings[index].slice(s, e + 1))
    .join('');
}
