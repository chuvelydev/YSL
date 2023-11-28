$(function () {
  /*슬라이드*/
  var total = $(".slide li").length;
  var wid = 100;
  var i = 0;

  start();

  function start() {
    timer = setInterval(function () {
      i++;
      if (i == total - 1) {
        $(".slide")
          .stop()
          .animate({ left: "-300%" }, function () {
            $(".slide").css({ left: "0" });
          });
        i = 0;
      } else {
        $(".slide")
          .stop()
          .animate({ left: -i * wid + "%" });
      }
      $(".navi li").removeClass("on");
      $(".navi li").eq(i).addClass("on");
    }, 3000);
  }
  $(".navi li").on("click", function () {
    clearInterval(timer);
    i = $(this).index();
    $(".slide")
      .stop()
      .animate({ left: -i * wid + "%" });
    $(".navi li").removeClass("on");
    $(".navi li").eq(i).addClass("on");
    start();
  });
});

/*공식몰이벤트*/

$(function () {
  let i = 0;
  let total = $(".exclu_slide> li").length;

  function start() {
    i++;

    if (i == total - 1) {
      $(".exclu_slide")
        .stop()
        .animate({ marginLeft: "-400%" }, function () {
          $(".exclu_slide").css({ marginLeft: "0" });
        });
      i = 0;
    } else {
      $(".exclu_slide")
        .stop()
        .animate({ marginLeft: `${-i * 100}%` });
    }
  }

  $(".slidecon .next").click(function () {
    start();
  });

  function back() {
    i--;

    if (i < 0) {
      $(".exclu_slide").css({ marginLeft: "-400%" });
      $(".exclu_slide").stop().animate({ marginLeft: "-300%" });
      i = 3;
    } else {
      $(".exclu_slide").animate({ marginLeft: `${-i * 100}%` });
    }
  }

  $(".slidecon  .prev").click(function () {
    back();
  });
});

$(function () {
  window.addEventListener("scroll", function () {
    let a = window.scrollY;
    console.log("Scroll position:", a);
    if (a >= 110) {
      $(".round").addClass("on");
    }

    if (a >= 600) {
      $("#con1 h2").addClass("on");
      $("#con1 h3").addClass("on");
      $(".holiday_list").addClass("on");
    }

    if (a >= 1500) {
      $("#con2 > h3 ").addClass("on");
      $("#con2 > h2").addClass("on");
    }

    if (a >= 1900) {
      $(" #con2>.beauty_list:nth-of-type(1)").addClass("on");
    }

    if (a >= 2300) {
      $(" #con2>.beauty_list:nth-of-type(2)").addClass("on");
    }
    if (a >= 2700) {
      $(" #con2>.beauty_list:nth-of-type(3)").addClass("on");
    }
    if (a >= 2900) {
      $(".swiper h2").addClass("on");
      $(".swiper h3").addClass("on");
    }
    if (a >= 3200) {
      $(".swiper-wrapper img").addClass("on");
      $(".swiper-wrapper h4").addClass("on");
      $(".swiper-wrapper a").addClass("on");
    }
    if (a >= 4000) {
      $(".exclusive h2").addClass("on");
      $(".exclusive h3").addClass("on");
      $(".exclu_slide").addClass("on");
      $(".slidecon a").addClass("on");
    }
  });
});
