function solution(my_string, indices) {
  const answer = [...my_string];
  indices.forEach((i) => {
    answer.splice(i, 1, '');
  });

  return answer.join('');
}
