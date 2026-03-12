// 1. 변수 선언
const maxScore = 100;
let inputScore = prompt("0~100 사이의 점수를 입력하세요.");

// 숫자로 변환
let score = Number(inputScore);

// 2. 입력 유효성 검사 (논리 연산자 ||, ! 사용)
// 숫자가 아니거나(isNaN), 0보다 작거나, 100보다 큰 경우
if (isNaN(score) || score < 0 || score > maxScore) {
    console.log("Invalid score! Please enter a number between 0 and 100.");
} else {
    // 유효한 입력일 때만 아래 로직 실행
    
    // 3. 추가 연산 수행
    if (!isNaN(score)) { // 단항 부정 (!) 사용 예시
        score++;        // 단항 산술: 1점 증가
        score *= 1.1;   // 복합 대입: 10% 가산 (스케일링)
        score += 5;     // 보너스 5점 추가
    }

    // 4. 복잡한 조건: 100점 제한
    if (score > 100) {
        score = 100;
    }

    // 5. 등급 부여 (if-else if)
    var grade;
    if (score >= 100) {
        grade = "S";
    } else if (score >= 90) {
        grade = "A";
    } else if (score >= 80) {
        grade = "B";
    } else if (score >= 70) {
        grade = "C";
    } else if (score >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    // 6. 합격 판별 (삼항 연산자)
    const status = (score >= 60) ? "Pass" : "Fail";

    // 7. 등급별 메시지 출력 (switch)
    let message;
    switch (true) {
        case (score === 100): // 정확히 100점인 경우 특수 메시지
            message = "Perfect Score!";
            break;
        case (grade === "A"):
            message = "Excellent work!";
            break;
        case (grade === "B"):
            message = "Good job!";
            break;
        case (grade === "C"):
            message = "Satisfactory performance.";
            break;
        case (grade === "D"):
            message = "Needs improvement.";
            break;
        case (grade === "F"):
            message = "Please try harder!";
            break;
        default:
            message = "Super!!"; // S등급 등 기타 상황
    }

    // 8. 최종 출력
    console.log("Final Score: " + Math.floor(score)); // 소수점 제거를 위해 Math.floor 사용
    console.log("Grade: " + grade);
    console.log("Status: " + status);
    console.log("Message: " + message);
}