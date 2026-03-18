// promise 기본형태
const promise = new Promise((resolve, reject) => {
    console.log("Promise 영역");
    setTimeout(() => {
        console.log("3초 지남!");
        let promiseResult = "작업성공!"; // DB에서 조회한 데이터, API 응답
        resolve();
    }, 3000);
});

// promise 실행
promise.then(() => {
    console.log("then 영역");
    console.log(result);
});