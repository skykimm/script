/************************************************************
  # scrollMotion
************************************************************/
// 모션클래스를 클릭했을때
// $('.motion').on("click", function(){
//     scrollMotion();
// });

// 윈도우 스크롤 할때
$(window).scroll(function(){
    scrollMotion();
});

function scrollMotion() {
    if ($('section').length < 1) return;
  
    var winY, objY, isIn;
    winY = $(window).scrollTop();
  
    $('section').find('.motion').each(function () {
      objY = $(this).offset().top;
      isIn = (window.innerHeight > objY - winY) ? true : false;
    // 현재 동작하고 있는 모션클래스의 인덱스 번호
    // $('.motion')
      console.log($(this).index());
      if (isIn) {
        $(this).addClass('is_on')
      } else {
        $(this).removeClass('is_on')
      }
    })
  }