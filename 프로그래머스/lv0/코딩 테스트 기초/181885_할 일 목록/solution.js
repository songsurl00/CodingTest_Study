function solution(todo_list, finished) {
  let answer = [];
  finished.forEach((item, index) => {
    if (!item) answer.push(todo_list[index]);
  });

  return answer;
}
