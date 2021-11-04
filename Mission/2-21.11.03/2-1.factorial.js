//Mission2 배열다루기

//1. factorial 함수

//factorial 구하기 1 (재귀함수)
function factorial(m) {
  if (m === 0 || m === 1) return 1;
  else {
    return m * factorial(m - 1);
  }
}

//factorial 배열에 넣기
function calculate(n) {
  result = [];
  for (let i = 1; i <= n; i++) {
    result.push(factorial(i));
  }
  return result;
}

//확인
console.log(calculate(4));

//factorial 구하기 2 (for문)
function factorial2(m) {
  let result2 = [];
  let temp = 1;

  for (let i = 1; i <= m; i++) {
    temp *= i;
    result2.push(temp);
  }
  console.log(result2);
}

//확인2
factorial2(4);
