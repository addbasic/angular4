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
let foo: string = 'hello';
// 열거형
enum People {Bob, John, Alex}
var x = People.Bob;
var y = People[0];
//널
var newVar = null;
//Any
var anyType: any = "string Assigned";
// 동일한 변수에 여러 타입의 값을 지정하는 예라는데...
//  안되는데;;;;;;;;;;;;
//var anyType = 404;
//var anyType = true;
//Void
function empty(): void{
    console.log(' function empty(): void{ ... } ');
}
/**
 * 인터페이스
 * */
interface Person{
    hairColor: string;
    age: number;
    alive?: Boolean;
}

interface AddNums{
    (num1: number, num2: number)
}

var x1: number = 5;
var y1: number = 10;

var newNum: AddNums;
newNum = function(num1: number, num2: number){
    var result: number = num1 + num2;
    console.log('result : ' + result);
    return result;
}

var z = newNum(x1,y1);