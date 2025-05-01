function solution(my_string, is_suffix) {
  const suffixArray = Array.from(my_string).map((_, i) =>
    my_string.substring(i)
  );
  return +suffixArray.includes(is_suffix);
}
