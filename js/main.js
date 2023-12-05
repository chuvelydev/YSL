$(function () {
  window.addEventListener("scroll", function () {
    let a = window.scrollY;
    if (a <= 300) {
      $(".up").css({ display: "none" });
    } else {
      $(".up").css({ display: "block" });
    }
  });
});

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
  // Initial call
  handleScroll();

  // Event listener for scroll
  window.addEventListener("scroll", handleScroll);

  // Event listener for window resize
  window.addEventListener("resize", function () {
    // Recalculate scroll-based animations after resizing
    handleScroll();
  });
});

function handleScroll() {
  // Check if the viewport width is greater than or equal to 1221px
  if (window.matchMedia("(min-width: 1221px)").matches) {
    let a = window.scrollY;

    if (a >= 110) {
      $(".round").addClass("on");
    }

    if (a >= 600) {
      $("#con1 h2").addClass("on");
      $("#con1 h3").addClass("on");
      $(".holiday_list").addClass("on");
    }

    if (a >= 1400) {
      $("#con2 > h3 ").addClass("on");
      $("#con2 > h2").addClass("on");
    }

    if (a >= 1700) {
      $(" #con2>.beauty_list:nth-of-type(1)").addClass("on");
    }

    if (a >= 2000) {
      $(" #con2>.beauty_list:nth-of-type(2)").addClass("on");
    }
    if (a >= 2300) {
      $(" #con2>.beauty_list:nth-of-type(3)").addClass("on");
    }
    if (a >= 2500) {
      $(".swiper h2").addClass("on");
      $(".swiper h3").addClass("on");
    }
    if (a >= 2700) {
      $(".swiper-wrapper img").addClass("on");
      $(".swiper-wrapper h4").addClass("on");
      $(".swiper-wrapper a").addClass("on");
    }
    if (a >= 3300) {
      $(".exclusive h2").addClass("on");
      $(".exclusive h3").addClass("on");
      $(".exclu_slide").addClass("on");
      $(".slidecon a").addClass("on");
    }
  } else if (
    window.matchMedia("(min-width: 768px) and (max-width: 1220px)").matches
  ) {
    let a = window.scrollY;
    console.log("Scroll position:", a);

    if (a >= 200) {
      $(".round").addClass("on");
    }

    if (a >= 450) {
      $("#con1 h2").addClass("on");
      $("#con1 h3").addClass("on");
      $(".holiday_list").addClass("on");
    }

    if (a >= 1000) {
      $("#con2 > h3 ").addClass("on");
      $("#con2 > h2").addClass("on");
    }

    if (a >= 1300) {
      $(" #con2>.beauty_list:nth-of-type(1)").addClass("on");
    }

    if (a >= 1500) {
      $(" #con2>.beauty_list:nth-of-type(2)").addClass("on");
    }
    if (a >= 1800) {
      $(" #con2>.beauty_list:nth-of-type(3)").addClass("on");
    }
    if (a >= 1900) {
      $(".swiper h2").addClass("on");
      $(".swiper h3").addClass("on");
    }
    if (a >= 2000) {
      $(".swiper-wrapper img").addClass("on");
      $(".swiper-wrapper h4").addClass("on");
      $(".swiper-wrapper a").addClass("on");
    }
    if (a >= 2400) {
      $(".exclusive h2").addClass("on");
      $(".exclusive h3").addClass("on");
      $(".exclu_slide").addClass("on");
      $(".slidecon a").addClass("on");
    }
  } else if (
    window.matchMedia("(min-width: 392px) and (max-width: 767px)").matches
  ) {
    let a = window.scrollY;
    console.log("Scroll position:", a);

    if (a >= 200) {
      $("#con1 h2").addClass("on");
      $("#con1 h3").addClass("on");
      $(".holiday_list").addClass("on");
    }

    if (a >= 1980) {
      $("#con2 > h3 ").addClass("on");
      $("#con2 > h2").addClass("on");
    }

    if (a >= 2170) {
      $(" #con2>.beauty_list:nth-of-type(1)").addClass("on");
    }

    if (a >= 2250) {
      $(" #con2>.beauty_list:nth-of-type(2)").addClass("on");
    }
    if (a >= 2400) {
      $(" #con2>.beauty_list:nth-of-type(3)").addClass("on");
    }
    if (a >= 2490) {
      $(".swiper h2").addClass("on");
      $(".swiper h3").addClass("on");
    }
    if (a >= 2520) {
      $(".swiper-wrapper img").addClass("on");
      $(".swiper-wrapper h4").addClass("on");
      $(".swiper-wrapper a").addClass("on");
    }
    if (a >= 3100) {
      $(".exclusive h2").addClass("on");
      $(".exclusive h3").addClass("on");
      $(".exclu_slide").addClass("on");
      $(".slidecon a").addClass("on");
    }
  } else if (window.matchMedia("(max-width: 391px)").matches) {
    let a = window.scrollY;
    console.log("Scroll position:", a);

    if (a >= 180) {
      $("#con1 h2").addClass("on");
      $("#con1 h3").addClass("on");
      $(".holiday_list").addClass("on");
    }

    if (a >= 1630) {
      $("#con2 > h3 ").addClass("on");
      $("#con2 > h2").addClass("on");
    }

    if (a >= 1700) {
      $(" #con2>.beauty_list:nth-of-type(1)").addClass("on");
    }

    if (a >= 1800) {
      $(" #con2>.beauty_list:nth-of-type(2)").addClass("on");
    }
    if (a >= 1900) {
      $(" #con2>.beauty_list:nth-of-type(3)").addClass("on");
    }
    if (a >= 2000) {
      $(".swiper h2").addClass("on");
      $(".swiper h3").addClass("on");
    }
    if (a >= 2030) {
      $(".swiper-wrapper img").addClass("on");
      $(".swiper-wrapper h4").addClass("on");
      $(".swiper-wrapper a").addClass("on");
    }
    if (a >= 2040) {
      $(".exclusive h2").addClass("on");
      $(".exclusive h3").addClass("on");
      $(".exclu_slide").addClass("on");
      $(".slidecon a").addClass("on");
    }
  }
}
