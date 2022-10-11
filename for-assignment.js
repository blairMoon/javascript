// 1
var names = ["흥민", "영희", "철수", "재석"];

function findName(name) {
  names.forEach((i) => {
    if (i == name) {
      console.log("있어요");
    }
  });
}
console.log(findName("흥민"));

// 2

function mutifly() {
  for (i = 2; i < 10; i++) {
    for (k = 1; k < 10; k++) {
      var result = i * k;
      console.log(result);
    }
  }
}
console.log(mutifly());

//3

function averageScore(pastScore, presentScore) {
  let saveScore = 0;
  let average = 0;
  for (i = 0; i < pastScore.length; i++) {
    saveScore += pastScore[i];
    average = saveScore / pastScore.length;
  }
  if (average < presentScore) {
    const upScore = presentScore - average;
    console.log(`평균보다 ${upScore}이 올랐네요`);
  } else if (average == presentScore) {
    console.log("여전하시네요 ");
  } else {
    const downScore = average - presentScore;
    console.log(`평균보다 ${downScore}이 떨어졌네요 재수추천`);
  }
}

console.log(averageScore([10, 20, 30, 40, 50], 40));
