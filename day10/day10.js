// 이항산술 연산자
let sum = 10 + 20;
console.log(sum); //30
let sub = 20 - 10;
console.log(sub); //10
let multi = 10 * 20;
console.log(multi); //200
let remain = 10 % 3;
console.log(remain); //1
let expon = 2 ** 3;
console.log(expon); //8

// 단항산술 연산자
let increment = 10;
increment++;
increment++;
console.log(increment); //11
let decrement = 10;
decrement--;
console.log(decrement); //9

// let inc = 10++; // 값 자체에 단항산술연산은 불가
// console.log(inc); // let inc = 10 + 1;

// 단항산술연산자 : 전치연산 과 후치연산
var num = 10;
let subNum = ++num; // 앞에 사용했으므로 전치 연산 방식
console.log(subNum); //11

var num = 10;
let subNum2 = num++; // 뒤에 사용했으므로 후치 연산 방식
console.log(subNum2); //10
console.log(num); //11

// 단항 부정 연산자
var num = 10;
num = -num;
console.log(num); // -10

// 단항 부정 연산자
var i = 3 + 4 * 5; // 곱셈이 먼저 계산됨
console.log(i); // 3 + 20 = 23
var j = (3 + 4) * 5; // 괄호 안이 먼저 계산됨
console.log(j); // 7 * 5 = 35

// 의미 있는 변수를 넣어주는 게 더 좋다.
let pencilcount = 10;
pencilcount = pencilcount + 5;
console.log(pencilcount); // 15

// 복합 대입 연산자
let x = 10;
x += 5;    // x = x + 5;

// 논리 연산자
let _ture = true;
let _false = false;

console.log('true && true', _ture && _ture); // true
console.log('true || true', _ture || _ture); // true

console.log('true && false', _ture && _false); // false
console.log('true || false', _ture || _false); // true

// 삼항 연산자
let score = 90;
let grade = (score >= 90) ? 'A+' : 'B';
console.log('학점:', grade); // 학점: A+

// 조건문
var num = 10;
if (num % 2 === 0){
    console.log('num은 짝수입니다.');
} else {
    console.log('num은 홀수입니다.');
}

// switch문
let food = "carrot";
switch (food) {
    case "melon":
    case "apple":
        console.log("fruits");
        break;
    case "carrot":
        console.log("vegetable");
        break;  
    default:
        console.log("It's not a fruits and vegetable.");
        break;
}

// iF문과 조건식
var score = 72;
if (score >=90 && score <= 100) {
    console.log("A++학점");
} else if (score >= 80 && score < 90) {
    console.log("A학점");
} else if (score >= 70 && score < 80) {
    console.log("B학점");
} else {
    console.log("학점없음");
}

// 조건식에서 범위를 줄이는 방법. 근데 맞는지 확인 필요
if (score <= 178) {
    console.log("A++학점");
} else if (score < 90) {
    console.log("A학점");
} else if (score < 80) {
    console.log("B학점");
} else {
    console.log("학점없음");
}

let input = prompt("숫자를 입력하세요:");
let number = parseFloat(input); // 입력된 문자열을 숫자로 변환