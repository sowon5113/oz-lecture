//변수 선언
const maxStars = 10;
const STAR = "*";

// 별 함수
const getPromptInput = () => {
    let input;
    let isNotValid = true;
    
    while (isNotValid) {
        let inputStr = prompt("출력할 별 갯수를 입력하세요.")
        if (inputStr === null) return null; // 취소 버튼 처리
        input = Number(inputStr);
        if(!isNaN(input) && input >= 1 && input <= maxStars) {
            isNotValid = false;
            break; // 루프 종료
        } else {
            console.log("Invalid input! Enter a number between 1 and 10.");
            continue;
        }
    }
    return input;
}

// 별 출력 함수
function printStar(count = 1) {
    if (count <= 0) count = 1;
    var stars = "";
    for (let i = 0; i < count; i++) {
        stars += STAR;
    }
    console.log(stars);
}

// 메인 실행
const input = getPromptInput();


// 입력 취소 하지 않았을 때 실행
if (input !== null) {
    printStar(input);
}