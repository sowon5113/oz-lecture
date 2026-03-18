// 1. 변수 선언 (요구사항: var, let, const 최소 1회 사용)
const MAX_TIME = 10;
const MIN_TIME = 1;
var timerMessage = ""; // 타이머 상태 메시지 저장

// 2. 타이머 시작 함수 (요구사항: 함수 선언문, 매개변수 기본값 사용)
function startCountdown(seconds = 10) {
  let timerCount = seconds; // 카운트다운 숫자를 관리할 let 변수
  const display = document.getElementById("timerDisplay");
  const startBtn = document.getElementById("startTimer");

  // 버튼 비활성화 및 기존 에러 스타일 제거
  startBtn.disabled = true;
  display.classList.remove("error");

  // 3. 비동기 처리 (요구사항: setInterval)
  const intervalId = setInterval(function() {
    if (timerCount > 0) {
      display.textContent = `타이머: ${timerCount}초`;
      timerCount--; // 후치 연산 x를  1 감소 (안넣으면 무한 루프)
    } else {
      // 4. 타이머 종료 처리 (요구사항: clearInterval)
      display.textContent = "타이머 종료!";
      startBtn.disabled = false;
      clearInterval(intervalId);
    }
  }, 1000);
}

// 5. 버튼 클릭 이벤트 리스너
document.getElementById("startTimer").addEventListener("click", function() {
  const input = document.getElementById("timerInput");
  const display = document.getElementById("timerDisplay");
  const inputValue = parseInt(input.value);

  // 6. 조건문과 연산자 (요구사항: isNaN, >=, <=, && 사용)
  if (isNaN(inputValue) || inputValue < MIN_TIME || inputValue > MAX_TIME) {
    display.textContent = "유효한 숫자(1-10)를 입력하세요!";
    display.classList.add("error");
  } else {
    // 유효한 입력일 경우 타이머 함수 실행
    startCountdown(inputValue);
  }
});