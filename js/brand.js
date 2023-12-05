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
      $(".y1 li:nth-of-type(1)").addClass("on");
      $(".y1 li:nth-of-type(2)").addClass("on");
    }
    if (a >= 1300) {
      $(".y2 li:nth-of-type(1)").addClass("on");
      $(".y2 li:nth-of-type(2)").addClass("on");
    }

    if (a >= 2253) {
      $(".y3 li:nth-of-type(1)").addClass("on");
      $(".y3 li:nth-of-type(2)").addClass("on");
    }
    if (a >= 3400) {
      $(".heading h1").addClass("on");
    }
    if (a >= 3700) {
      $(".item1").addClass("on");
      $(".item2").addClass("on");
      $(".item3").addClass("on");
      $(".item4").addClass("on");
      $(".item5").addClass("on");
      $(".item6").addClass("on");
    }
    if (a >= 4400) {
      $(".ysl_text2 h2").addClass("on");
      $(".ysl_text2 h3:nth-of-type(1)").addClass("on");
      $(".ysl_text2 h3:nth-of-type(2)").addClass("on");
    }
  } else if (
    window.matchMedia("(min-width: 768px) and (max-width: 1220px)").matches
  ) {
    let a = window.scrollY;
    if (a >= 300) {
      $(".y1 li:nth-of-type(1)").addClass("on");
      $(".y1 li:nth-of-type(2)").addClass("on");
    }
    if (a >= 1100) {
      $(".y2 li:nth-of-type(1)").addClass("on");
      $(".y2 li:nth-of-type(2)").addClass("on");
    }

    if (a >= 1900) {
      $(".y3 li:nth-of-type(1)").addClass("on");
      $(".y3 li:nth-of-type(2)").addClass("on");
    }
    if (a >= 2500) {
      $(".heading h1").addClass("on");
    }
    if (a >= 2700) {
      $(".item1").addClass("on");
      $(".item2").addClass("on");
      $(".item3").addClass("on");
      $(".item4").addClass("on");
      $(".item5").addClass("on");
      $(".item6").addClass("on");
    }
    if (a >= 3600) {
      $(".ysl_text2 h2").addClass("on");
      $(".ysl_text2 h3:nth-of-type(1)").addClass("on");
      $(".ysl_text2 h3:nth-of-type(2)").addClass("on");
    }
  } else if (
    window.matchMedia("(min-width: 392px) and (max-width: 767.9px)").matches
  ) {
    let a = window.scrollY;
    console.log("Scroll position:", a);
    if (a >= 336) {
      $(".y1 li:nth-of-type(1)").addClass("on");
    }
    if (a >= 900) {
      $(".y1 li:nth-of-type(2)").addClass("on");
    }
    if (a >= 1200) {
      $(".y2 li:nth-of-type(1)").addClass("on");
    }
    if (a >= 1600) {
      $(".y2 li:nth-of-type(2)").addClass("on");
    }

    if (a >= 2200) {
      $(".y3 li:nth-of-type(1)").addClass("on");
    }
    if (a >= 2900) {
      $(".y3 li:nth-of-type(2)").addClass("on");
    }
    if (a >= 3400) {
      $(".heading h1").addClass("on");
    }
    if (a >= 3750) {
      $(".item1").addClass("on");
      $(".item2").addClass("on");
      $(".item3").addClass("on");
      $(".item4").addClass("on");
      $(".item5").addClass("on");
      $(".item6").addClass("on");
    }
    if (a >= 5500) {
      $(".ysl_text2 h2").addClass("on");
      $(".ysl_text2 h3:nth-of-type(1)").addClass("on");
      $(".ysl_text2 h3:nth-of-type(2)").addClass("on");
    }
  } else if (window.matchMedia("(max-width: 391.9px)").matches) {
    let a = window.scrollY;
    console.log("Scroll position:", a);

    if (a >= 300) {
      $(".y1 li:nth-of-type(1)").addClass("on");
    }
    if (a >= 700) {
      $(".y1 li:nth-of-type(2)").addClass("on");
    }
    if (a >= 1000) {
      $(".y2 li:nth-of-type(1)").addClass("on");
    }
    if (a >= 1600) {
      $(".y2 li:nth-of-type(2)").addClass("on");
    }
    if (a >= 2100) {
      $(".y3 li:nth-of-type(1)").addClass("on");
    }
    if (a >= 2300) {
      $(".y3 li:nth-of-type(2)").addClass("on");
    }
    if (a >= 2900) {
      $(".heading h1").addClass("on");
    }
    if (a >= 3100) {
      $(".item1").addClass("on");
      $(".item2").addClass("on");
      $(".item3").addClass("on");
      $(".item4").addClass("on");
      $(".item5").addClass("on");
      $(".item6").addClass("on");
    }
    if (a >= 4800) {
      $(".ysl_text2 h2").addClass("on");
      $(".ysl_text2 h3:nth-of-type(1)").addClass("on");
      $(".ysl_text2 h3:nth-of-type(2)").addClass("on");
    }
  }
}
