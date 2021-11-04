//2018 Kakao blind recruitment [3차] n진수 게임
//Mission1 [진수변환기]

function solution(n, t, m, p) {
  var answer = '';
  let allString = '';

  for (let i = 0; i < t * m; i++) {
    //전체 문자열
    allString += i.toString(n);

    //튜브가 말해야 하는 문자열
    if (i % m === p - 1) answer += String(allString[i]).toUpperCase();
  }

  console.log(answer);
  return answer;
}

//프로그래머스 테스트케이스
solution(2, 4, 2, 1);
solution(16, 16, 2, 1);
solution(16, 16, 2, 2);
