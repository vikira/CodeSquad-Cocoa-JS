//배열 거르기
//1번 방식 : for문 사용하기
function checkSpecial(str) {
  const regExp = /[!?@#$%^&*():;+-=~{}<>\_\[\]\|\\\"\'\,\.\/\`\₩]/g;
  if (regExp.test(str)) return true;
  else return false;
}

//2번 방식 : forEach, filter, map등 고차함수 사용하기
