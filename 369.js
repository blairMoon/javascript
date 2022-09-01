function 삼육구게임(i) {
  if (i % 3 == 0) {
    console.log("박수");
  } else {
    console.log("통과");
  }
}

삼육구게임(15);

function 삼육구게임2(num) {
  if (i % 9 == 0) {
    console.log("박수박수");
  } else if (i % 3 == 0) {
    console.log("박수");
  } else {
    console.log("통과");
  }
}
삼육구게임2(18);

function 합격했니(num1, num2) {
  if (num1 < 40 || num2 < 40) {
    console.log("불합격");
  } else if (num1 + num2 >= 120) {
    console.log("합격");
  } else {
    console.log("불합격");
  }
}
