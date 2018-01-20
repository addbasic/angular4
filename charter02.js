/**
 * 다양한 타입
 * 인터페이스
 * 클래스
 *   클래스상속
 * 모듈
 * 함수
 * 정리
 * */
/**
 * 다양한 타입
 * */
var foo = 'hello';
// 열거형
var People;
(function (People) {
    People[People["Bob"] = 0] = "Bob";
    People[People["John"] = 1] = "John";
    People[People["Alex"] = 2] = "Alex";
})(People || (People = {}));
var x = People.Bob;
var y = People[0];
//널
var newVar = null;
//Any
var anyType = "string Assigned";
// 동일한 변수에 여러 타입의 값을 지정하는 예라는데...
//  안되는데;;;;;;;;;;;;
//var anyType = 404;
//var anyType = true;
//Void
function empty() {
    console.log(' function empty(): void{ ... } ');
}
var x1 = 5;
var y1 = 10;
var newNum;
newNum = function (num1, num2) {
    var result = num1 + num2;
    console.log('result : ' + result);
    return result;
};
var z = newNum(x1, y1);
