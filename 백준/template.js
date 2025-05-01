// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
//* 입력값이 하나일 떼
const input = require('fs').readFileSync('test.txt').toString().trim();

//* 입력값 사이에 공백이 있을 때
// const input = require('fs');.readFileSync('test.txt').toString().trim().split(' ');

//* 여러 줄로 입력값을 받을 때
// const input = require('fs').readFileSync('test.txt').toString().trim().split('\n');

//* 풀이
function solution(input) {
  const [a, b] = arr[0].split(' ');
  return Number(a) + Number(b);
}

console.log(solution(input));
