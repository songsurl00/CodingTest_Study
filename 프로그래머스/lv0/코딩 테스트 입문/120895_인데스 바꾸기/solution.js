function solution(my_string, num1, num2) {
  const str1 = my_string[num1];
  const str2 = my_string[num2];
  const answer = [...my_string];

  answer[num1] = str2;
  answer[num2] = str1;

  return answer.join('');
}
