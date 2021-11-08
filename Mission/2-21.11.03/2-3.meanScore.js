//Mission2 배열다루기
//3. 평균 구하기

const grades = [
  [88, 76, 77],
  [33, 44, 44],
  [90, 100, 94],
  [30, 44, 98],
];

function getAvg(grades) {
  let avgScore = 0; //각 학생의 평균 점수
  let maxAvgScore = 0; //모든 학생의 최고점수의 평균 점수
  let numOfStudents = grades.length; //학생수 (행)
  let numOfSubjects = grades[0].length; //과목수 (열)

  for (let i = 0; i < numOfStudents; i++) {
    for (let j = 0; j < numOfSubjects; j++) {
      avgScore += grades[i][j];
    }
    //(1) 각 학생의 평균점수 구하기
    avgScore /= numOfSubjects;
    console.log(i + 1, '번 학생 평균 점수 : ', avgScore.toFixed(2)); //소수 2째자리까지 반올림
    avgScore = 0; //초기화

    //(2) 각 학생의 최고 점수 구하기
    maxAvgScore += Math.max(...grades[i]);
  }
  //(2) 모든 학생의 최고 점수의 평균 구하기
  maxAvgScore /= numOfStudents;
  console.log('모든 학생의 최고점수의 평균점수 : ', maxAvgScore);
}

getAvg(grades);
