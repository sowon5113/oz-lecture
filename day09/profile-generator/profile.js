// var 변수 선언
var name = "sowon";
name = "Sowon"; // var 재할당
console.log("이름:",name);

// let 변수 선언
let age = 46;
console.log("나이:",age);

// const 상수 선언 (변경 불가)
const job = "solopreneur";
console.log("직업:",job);

// string 문자열 변수 선언
let string1 = "1인 창업가";
let string2 = "소원 입니다";
let string3 = "자전거와 여행 분야의 아이디어를 구상하고 있습니다.";
let string4 = "동기 분들, 태민 강사님, 오즈스쿨 분들과 함께 화이팅입니다!";

// string 문자열 연결 + 사용해서 프로필 문장 생성
let stringA = string1 + " " + string2 +"\n"+ string3 + "\t" + string4;
console.log(stringA);

// boolean 논리형
let boolean1 = true;
let boolean2 = false;
let boolean3 = 10 < 20;
let boolean4 = 10 > 20;
console.log("결혼을 했습니까?:", boolean3);
console.log("아이가 있습니까?", boolean4);

// 배열 리터럴
let hobbies = ["cycle", "travel", "gaming", "ai study"];
console.log("My hobbies:", hobbies);

// 객체 리터럴
let myinfo = {
    name: "sowon",
    age: 46,
    job: "solopreneur",
    isStudent: true
}
console.log(myinfo);
console.log(myinfo.name + "입니다."+ "\n나이는 " + myinfo.age + "살입니다." +  "\n직업은 " + myinfo.job + "입니다." + "\n오즈스쿨학생입니까? " + myinfo.isStudent);

// typeof 데이터 타입 출력
console.log("typeof name:", typeof name);
console.log("typeof age:", typeof age);
console.log("typeof myinfo:", typeof myinfo);
console.log("typeof hobbies:", typeof hobbies);

// undefined와 null 구분
let undefinedVariable;
let nullVariable = null;
console.log("undefined:", undefinedVariable);
console.log("null:", nullVariable);
console.log("typeof undefined:", typeof undefinedVariable); 
console.log("typeof null:", typeof nullVariable);
console.log(null === undefined); // false

// 템플릿 문자열
let templateString = `안녕하세요, 저는 ${name}입니다. 나이는 ${age}살이고, 직업은 ${job}입니다. 제 취미는 ${hobbies.join(", ")}입니다.`;
console.log(templateString);

// 배열에 null, undefined를 포함 및 요소의 타입 출력
let mixedArray = ["Sowon", 46, null, undefined, true];
console.log("Mixed Array:", mixedArray);

// 2. 객체에 새로운 속성(email) 추가
myinfo.email = null; // 아직 이메일 정보가 없는 상태를 가정
console.log("--- 객체 속성 추가 및 null 확인 ---");
console.log("추가된 객체 상태:", myinfo);

// 해당 속성값이 null인지 확인 후 출력
if (myinfo.email === null) {
    console.log("이메일 정보가 비어 있습니다. (null 확인 완료)");
} else {
    console.log(`등록된 이메일: ${myinfo.email}`);
}