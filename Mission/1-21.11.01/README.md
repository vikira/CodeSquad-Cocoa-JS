# [Mission 1] 다각형의 넓이 구하기(21.11.01)

## 1. 다음처럼 동작하는 getArea함수를 만든다.

getArea 함수를 사용하면, 모든 넓이 값을 얻을 수 있다.

```
//getArea('circle', 10);
>  원의 넓이 값출력

//getArea('rect', 10,15);
>  사각형의 넓이값출력

//getArea('trapezoid', 10,15,12);
>  사다리꼴의 넓이값출력

//getArea('circle', 1, n);
> 반지름이 1부터 n까지 1씩 증가하면서, n개까지의 원의 넓이의 모든 합을 출력. 
```



## 2. printExecutionSequence 함수만들기

프로그래밍에서 로깅(logging)은 프로그램의 수행과정이나 결과를 기록하는 것을 말한다.
지금까지 호출된 함수가 무엇인지 알려주는 printExecutionSequence함수를 만들자.

```
getCircle() 
getCircle() 
getArea('circle',2) 
getArea('rect',2,3) 
printExecutionSequence()  //printExecutionSequence가 불려지면, 함수 호출된 순서를 출력한다. 
> 계산수행순서 : circle, circle, circle, rect
```



## 3. printExecutionSequence 함수 수정

수행순서 뿐 아니라, **함수의 결과까지 순서대로 같이 출력**하는 기능을 만들어보자.



## 4. debugging 기술문서 정리하기

실습 이후에, debugging 방법을 markdown문서로 정리하고, github에 이를 정리해서 올린다.

- breakpoints란
- watch사용법
- call stack 의 의미
- Step over / Step into/ Step out



## 6. 추가미션

사용자 입력을 받아서 처리되도록 해본다.
예시)

```shell
/src/> node mypromgram.js
> 'rect$rect$$circle
> //rect함수 2번 호출 결과와 circle 1번 실행 결과 노출
```



## 학습 체크포인트

- Node.js를 통해서 JavaScript개발을 할 수 있다
- 함수의 역할은 한가지에 집중하고 있다.
- 일관된 변수명과 함수이름을 짓고 있다.
- 함수는 늘 동일한 입력값에 동일한 출력을 보장한다.
- 개발과정에서 breakpoint나 'debugger;' 키워드를 사용해서 디버깅을 했다.

