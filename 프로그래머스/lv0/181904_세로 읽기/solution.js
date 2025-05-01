function solution(my_string, m, c) {
  let answer = {};

  [...my_string].forEach((str, index) => {
    const key = (index + 1) % m === 0 ? m : (index + 1) % m;
    answer[key] ? (answer[key] += str) : (answer[key] = str);
  });

  console.log(answer);

  return answer[`${c}`];
}

console.log(solution('ihrhbakrfpndopljhygc', 4, 2));
