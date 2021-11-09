//1. 해시맵 구현

//1-1.문자열 키와 문자열 값을 저장하는 해시맵 라이브러리를 구현한다.
let myObj = {};
let myObj2 = {};

//1-2. 고유한 Hash 함수를 정한다.
// (1). put(String key, String value) 키-값을 추가한다.
function put(key, value) {
  myObj[key] = value;
}

// (2). remove(String key) 해당 키에 있는 값을 삭제한다.
function remove(key) {
  delete myObj[key];
}

// (3). containsKey(String) 해당 키가 존재하는지 판단해서 Bool 결과를 리턴한다.
function containsKey(key) {
  return key in myObj ? true : false;
}

// (4) get(String) 해당 키와 매치되는 값을 찾아서 리턴한다.
function get(key) {
  return myObj[key];
}

// (5) isEmpty() 비어있는 맵인지 Bool 결과를 리턴한다.
// 2가지 방법 존재
// 1. key in myObj loop를 돌려서 한번이라도 도는지 확인
function isEmpty1(obj) {
  for (let key in obj) return false; //한번이라도 돌면 false
  return true; //한번도 안돌면 true
}
// 2. length 함수 사용
function isEmpty2(obj) {
  return Object.keys(obj).length ? false : true;
}

// (6) keys() 전체 키 목록을 [String] 배열로 리턴한다.
function keys()

// replace(String key, String value) 키-값으로 기존 값을 대체한다.
// size() 전체 아이템 개수를 리턴한다.
// clear() 전체 맵을 초기화한다.

console.log('빈 object : ', myObj);
put('name', 'Elena'); //(1). put(String key, String value) 키-값을 추가한다.
put('age', 100);
put('hobby', 'sailing');
remove('name'); // (2). remove(String key) 해당 키에 있는 값을 삭제한다.
console.log('key in Obj? ', containsKey('name'));
console.log('key in Obj? ', containsKey('age'));
console.log('해당 key의 프로퍼티 return : ', get('hobby'));
console.log(isEmpty1(myObj));
console.log(isEmpty1(myObj2));
console.log(isEmpty2(myObj));
console.log(isEmpty2(myObj2));
console.log('최종 확인: ', myObj); //최종 확인
