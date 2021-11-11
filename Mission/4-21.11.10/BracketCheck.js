const data = '[1,2,[3,4,[5,[6]]]]';

let everyString = [];
let bracket = [];
let value = [];
let depth = 0;

function BracketCheck(data) {
  //1
  everyString = data.split('');

  //2
  everyString.forEach((element) => {
    if (element === '[') {
      bracket.push(element);
      depth++;
    } else if (element === ']') {
      if (!bracket.pop()) console.log('여는 괄호 < 닫는 괄호');
    } else if (element === ',');
    else value.push(element);
  });

  bracketErrorDectect(bracket);

  console.log(
    `배열의 중첩된 깊이 수준은 ${depth}이며, 총 ${value.length}개의 원소가 포함되어 있습니다.`
  );
}

function bracketErrorDectect(bracket) {
  bracket.length === 0 ? null : console.log('여는 괄호 > 닫는 괄호');
}

BracketCheck(data);
