function solution(num_list, n) {
  num_list.unshift(...num_list.splice(n));
  return num_list;
}
