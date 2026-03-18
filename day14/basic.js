// 비동기 개념
console("이미지 로딩 시작");

setTimeout(() => {
    console.log("이미지 로딩 완료")
}, 2000);
console.log("다른 작업 수행");

//콜백 함수
function syHello(name, callback) {
    console.log(`안녕, ${name}`);
    setTimeout(() => {
        callback()
    }, 2000);                   
}

