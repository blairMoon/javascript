//1
let 나이 = 25;
const 출신지역 = "서울";
//2
var 예금액 = 10000;
var 미래예금액 = 0;

if (예금액 > 50000) {
  미래예금액 = 예금액 + 예금액 * 0.2 + (예금액 + 예금액 * 0.2) * 0.2;
} else {
  미래예금액 = 예금액 + 예금액 * 0.15 + (예금액 + 예금액 * 0.15) * 0.15;
}

console.log(미래예금액);

//3
var first = 360;
var end = 0;

end = first + (first / 3) * 2 + (((first / 3) * 2) / 3) * 2;
console.log(end);

//4
let count = 0;

document.querySelector("#send-answer").addEventListener("click", function () {
  let answer = document.querySelector("#answer").value;
  if (answer == 1335) {
    alert("정답입니다");
  } else if (count < 3) {
    count += 1;
    console.log(count);
    alert("다시 시도해보세용");
  } else {
    alert("이 멍청아 다틀렷다");
  }
});
