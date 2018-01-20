/*
* 연산자
*   산술연산자
*   할당연산자
*   비교 연산자와 조건 연산자의 적용
* 반복문
*   while문
*   do/while
*   for
*   for/in
*   반복문제어
* 함수
*   함수 정의
*   함수에 변수 전달하기
*   함수에서 값 반환하기
* 변수 유호범위
* */
var myVar = 1;
function writeIt(){
    var myVar = 2;
    console.log('myVar = '+ myVar);
    writeMore();
}
function writeMore(){
    console.log('myVar = '+ myVar);
}

writeIt();
/**
 * 자바스크립트 객체
 *   객체 구문
 *   사용자 정의 객체
 *   객체 프로토 타이핑패턴
 * 문자열
 *   문자열결합
 *   문자열에서 부문자열 검색
 *   문자열에서 단어치환
 *   문자열을 배열로 분할
 * 배열
 *   배열 결합
 *   배열 순회
 *   배열을 문자열로 변환
 *   바열에 항목이 포함돼 있는지 검사
 *   배열 항목의 추가와 제거
 * 오류 처리
 *   try/catch블록
 *   사용자 정의 오류
 *   finally활용
 * 정리
 * */