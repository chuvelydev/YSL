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
