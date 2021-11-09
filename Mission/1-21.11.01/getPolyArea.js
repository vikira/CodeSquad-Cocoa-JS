//[Mission 1] 다각형의 넓이 구하기
//1.getArea 함수를 만들어서 모든 도형의 넓이를 구한다.

let sequenceArr = [];

//다각형 종류 확인
function getArea(type, ...size) {
  switch (type) {
    case 'circle':
      area = getCircArea(...size);
      break;

    case 'rect':
      area = getRectArea(...size);
      break;

    case 'trap':
      area = getTrapArea(...size);
      break;

    default:
      return false;
  }
  saveExecutionSequence(type, area);
}

//circle
function getCircArea(...size) {
  if (size.length === 1) {
    circArea = Math.PI * size * size;
    return circArea;
  }

  let sum = 0;
  for (let i = size[0]; i <= size[1]; i++) {
    sum += i * i * Math.PI;
  }
  return sum;
}

//rectangle
function getRectArea(width, height) {
  let rectArea = height * width;
  return rectArea;
}

//trapezoid
function getTrapArea(top, bottom, height) {
  trapArea = ((top + bottom) * height) / 2;
  return trapArea;
}

//2. printExecutionSequence 함수 만들기
//호출된 함수의 순서와 실행결과를 sequenceArr에 push
function saveExecutionSequence(type, area) {
  sequenceArr.push(`${type} : ${area}`);
}

//호출된 함수의 순서와 실행 결과 출력
function printExecutionSequence() {
  sequenceArr.forEach((element) => {
    console.log(element);
  });
}

//test case
getArea('circle', 10); //314.159...
getArea('rect', 10, 15); //150
getArea('trap', 10, 15, 12); //150
getArea('circle', 1, 5); //172.787...
printExecutionSequence();
