//[Mission 1] 다각형의 넓이 구하기
//1.getArea 함수를 만들어서 모든 도형의 넓이를 구한다.

let orderArr = [];

//다각형 종류 확인
function getArea(shape, ...size) {
  switch (shape) {
    case 'circle':
      circleArea(...size);
      break;

    case 'rect':
      rectArea(...size);
      break;

    case 'trapezoid':
      trapezArea(...size);
      break;

    default:
      return false;
  }
}

//circle
function circleArea(size) {
  if (size.length === 1) {
    return Math.PI * size[0] * size[0];
  }

  let sum = 0;
  for (let i = size[0]; i < size[1]; i++) {
    sum += size[0] * size[0] * Math.PI;
  }
  return sum;
}

//rectangle
function rectArea(height, width) {
  return height * width;
}

//trapezoid
function trapezArea(top, bottom, height) {
  return ((top + bottom) * height) / 2;
}

//2. printExecutionSequence 함수 만들기
//호출된 함수의 순서와 실행결과를 stack에 push
function saveExecutionSequence(shape, returnedData) {
  orderArr.push(`${type} : ${returnedData}`);
}

//호출된 함수의 순서와 실행 결과 출력
function printExecutionSequence() {
  let num = 0;
  for (let i = 0; i < orderArr.length; i++) {
    console.log();
  }
}

//test case
getArea('circle', 10);
getArea('rect', 10, 15);
getArea('trapezoid', 10, 15, 12);
getArea('circle', 1, 5);
