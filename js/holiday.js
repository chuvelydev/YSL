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
/*
$(function () {
  window.addEventListener("scroll", function () {
    let a = window.scrollY;

    if (a >= 500) {
      $("#con1 h2:nth-of-type(1)").addClass("on");
      $("#con1 h2:nth-of-type(2)").addClass("on");
    }
    if (a >= 800) {
      $(".con1_img").addClass("on");
    }

    if (a >= 1500) {
      $("#con1 h4:nth-of-type(1)").addClass("on");
      $("#con1 h4:nth-of-type(2)").addClass("on");
    }
    if (a >= 2000) {
      $(".b1").addClass("on");
    }
    if (a >= 2600) {
      $(".b2").addClass("on");
    }
    if (a >= 3200) {
      $(".b3").addClass("on");
    }
    if (a >= 3600) {
      $(".b4").addClass("on");
    }
    if (a >= 3800) {
      $("#con3 h2:nth-of-type(1)").addClass("on");
      $("#con3 h2:nth-of-type(2)").addClass("on");
    }
    if (a >= 4000) {
      $("#con3 video").addClass("on");
    }
  });
});
*/

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

    if (a >= 500) {
      $("#con1 h2:nth-of-type(1)").addClass("on");
      $("#con1 h2:nth-of-type(2)").addClass("on");
    }
    if (a >= 800) {
      $(".con1_img").addClass("on");
    }

    if (a >= 1500) {
      $("#con1 h4:nth-of-type(1)").addClass("on");
      $("#con1 h4:nth-of-type(2)").addClass("on");
    }
    if (a >= 2000) {
      $(".b1").addClass("on");
    }
    if (a >= 2600) {
      $(".b2").addClass("on");
    }
    if (a >= 3200) {
      $(".b3").addClass("on");
    }
    if (a >= 3600) {
      $(".b4").addClass("on");
    }
    if (a >= 3800) {
      $("#con3 h2:nth-of-type(1)").addClass("on");
      $("#con3 h2:nth-of-type(2)").addClass("on");
    }
    if (a >= 4000) {
      $("#con3 video").addClass("on");
    }
  } else if (
    window.matchMedia("(min-width: 768px) and (max-width: 1220px)").matches
  ) {
    let a = window.scrollY;

    if (a >= 250) {
      $("#con1 h2:nth-of-type(1)").addClass("on");
      $("#con1 h2:nth-of-type(2)").addClass("on");
    }
    if (a >= 550) {
      $(".con1_img").addClass("on");
    }

    if (a >= 1000) {
      $("#con1 h4:nth-of-type(1)").addClass("on");
      $("#con1 h4:nth-of-type(2)").addClass("on");
    }
    if (a >= 1500) {
      $(".b1").addClass("on");
    }
    if (a >= 1900) {
      $(".b2").addClass("on");
    }
    if (a >= 2300) {
      $(".b3").addClass("on");
    }
    if (a >= 2800) {
      $(".b4").addClass("on");
    }
    if (a >= 3200) {
      $("#con3 h2:nth-of-type(1)").addClass("on");
      $("#con3 h2:nth-of-type(2)").addClass("on");
    }
    if (a >= 3500) {
      $("#con3 video").addClass("on");
    }
  } else if (
    window.matchMedia("(min-width: 392px) and (max-width: 767.9px)").matches
  ) {
    let a = window.scrollY;

    if (a >= 193) {
      $("#con1 h2:nth-of-type(1)").addClass("on");
      $("#con1 h2:nth-of-type(2)").addClass("on");
    }
    if (a >= 375) {
      $(".con1_img").addClass("on");
    }

    if (a >= 640) {
      $("#con1 h4:nth-of-type(1)").addClass("on");
      $("#con1 h4:nth-of-type(2)").addClass("on");
    }
    if (a >= 900) {
      $(".b1").addClass("on");
    }
    if (a >= 1200) {
      $(".b2").addClass("on");
    }
    if (a >= 1400) {
      $(".b3").addClass("on");
    }
    if (a >= 1600) {
      $(".b4").addClass("on");
    }
    if (a >= 1750) {
      $("#con3 h2:nth-of-type(1)").addClass("on");
      $("#con3 h2:nth-of-type(2)").addClass("on");
    }
    if (a >= 1780) {
      $("#con3 video").addClass("on");
    }
  } else if (window.matchMedia("(max-width: 391.9px)").matches) {
    let a = window.scrollY;
    console.log("Scroll position:", a);

    if (a >= 180) {
      $("#con1 h2:nth-of-type(1)").addClass("on");
      $("#con1 h2:nth-of-type(2)").addClass("on");
    }
    if (a >= 350) {
      $(".con1_img").addClass("on");
    }

    if (a >= 460) {
      $("#con1 h4:nth-of-type(1)").addClass("on");
      $("#con1 h4:nth-of-type(2)").addClass("on");
    }
    if (a >= 690) {
      $(".b1").addClass("on");
    }
    if (a >= 820) {
      $(".b2").addClass("on");
    }
    if (a >= 920) {
      $(".b3").addClass("on");
    }
    if (a >= 1020) {
      $(".b4").addClass("on");
    }
    if (a >= 1250) {
      $("#con3 h2:nth-of-type(1)").addClass("on");
      $("#con3 h2:nth-of-type(2)").addClass("on");
    }
    if (a >= 1400) {
      $("#con3 video").addClass("on");
    }
  }
}
