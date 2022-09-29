/*
버튼 0 누르면 
모든 버튼에 붙은 orange 클래스명 제거 
버튼 0에 orange 클래스명 추가 
모든 div에 붙은 show 클래스명 제거 
div0에 show 클래스명 추가 
*/

//자주 쓰는 셀렉터 변수에 넣어쓰기
// let button = $('.tab-button')

// for (let i = 0; i < 3; i++) {
//   $(".tab-button")
//     .eq(i)
//     .on("click", function () {
//       탭열기(i);
//     });
// }

function 탭열기(k) {
  $(".tab-button").removeClass("orange");
  $(".tab-button").eq(k).addClass("orange");

  $(".tab-content").removeClass("show");
  $(".tab-content").eq(k).addClass("show");
}

$(".list").click(function (e) {
  탭열기(e.target.dataset.id); //지금 누른 버틴에 숨겨져있는 data-id
  console.log(e.target.dataset.id);
});
//이벤트 버블링을 알고 있으면 이벤트 리스너가 많이 필요없음
//반복문에서 var = i 는 안되는 경우가 있음 let으로 변경해주길
// 번수의 범위가 차이가 있음요
/*
$(".tab-button")
  .eq(1)
  .on("click", function () {
    $(".tab-button").removeClass("orange");
    $(".tab-button").eq(1).addClass("orange");
    $(".tab-content").removeClass("show");
    $(".tab-content").eq(1).addClass("show");
  });
$(".tab-button")
  .eq(2)
  .on("click", function () {
    $(".tab-button").removeClass("orange");
    $(".tab-button").eq(2).addClass("orange");
    $(".tab-content").removeClass("show");
    $(".tab-content").eq(2).addClass("show");
  });
*/
