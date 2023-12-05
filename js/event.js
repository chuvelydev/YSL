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

    if (a >= 200) {
      $(".con1_text h4:nth-of-type(1)").addClass("on");
      $(".con1_text h4:nth-of-type(2)").addClass("on");
      $(".con1_text h4:nth-of-type(3)").addClass("on");
    }
    if (a >= 500) {
      $(".con1_2").addClass("on");
    }
    if (a >= 1000) {
      $(".con2_product1").addClass("on");
    }
    if (a >= 1100) {
      $("#con2 > h2").addClass("on");
    }
    if (a >= 1400) {
      $(".con2_1 li:nth-of-type(1)").addClass("on");
      $(".con2_1 li:nth-of-type(2)").addClass("on");
    }
    if (a >= 1800) {
      $("#con2 h3").addClass("on");
    }
    if (a >= 2000) {
      $(".con2_2 li:nth-of-type(1)").addClass("on");
      $(".con2_2 li:nth-of-type(2)").addClass("on");
      $(".con2_2 li:nth-of-type(3)").addClass("on");
    }
    if (a >= 2700) {
      $(".con3_1").addClass("on");
    }
    if (a >= 3000) {
      $(".con3_2 li:nth-of-type(1)").addClass("on");
      $(".con3_2 li:nth-of-type(2)").addClass("on");
    }
  } else if (
    window.matchMedia("(min-width: 768px) and (max-width: 1220px)").matches
  ) {
    let a = window.scrollY;

    if (a >= 90) {
      $(".con1_text h4:nth-of-type(1)").addClass("on");
      $(".con1_text h4:nth-of-type(2)").addClass("on");
      $(".con1_text h4:nth-of-type(3)").addClass("on");
    }
    if (a >= 270) {
      $(".con1_2").addClass("on");
    }
    if (a >= 700) {
      $("#con2 > h2").addClass("on");
    }
    if (a >= 900) {
      $(".con2_1 li:nth-of-type(1)").addClass("on");
      $(".con2_1 li:nth-of-type(2)").addClass("on");
    }
    if (a >= 1300) {
      $("#con2 h3").addClass("on");
    }
    if (a >= 1500) {
      $(".con2_2 li:nth-of-type(1)").addClass("on");
      $(".con2_2 li:nth-of-type(2)").addClass("on");
      $(".con2_2 li:nth-of-type(3)").addClass("on");
    }
    if (a >= 2100) {
      $(".con3_1").addClass("on");
    }
    if (a >= 2500) {
      $(".con3_2 li:nth-of-type(1)").addClass("on");
      $(".con3_2 li:nth-of-type(2)").addClass("on");
    }
  } else if (
    window.matchMedia("(min-width: 392px) and (max-width: 767.9px)").matches
  ) {
    let a = window.scrollY;

    if (a >= 90) {
      $(".con1_text h4:nth-of-type(1)").addClass("on");
      $(".con1_text h4:nth-of-type(2)").addClass("on");
      $(".con1_text h4:nth-of-type(3)").addClass("on");
    }
    if (a >= 180) {
      $(".con1_2").addClass("on");
    }
    if (a >= 270) {
      $(".con2_product1").addClass("on");
    }
    if (a >= 600) {
      $("#con2 > h2").addClass("on");
    }
    if (a >= 680) {
      $(".con2_1 li:nth-of-type(1)").addClass("on");
    }
    if (a >= 690) {
      $(".con2_1 li:nth-of-type(2)").addClass("on");
    }
    if (a >= 1180) {
      $("#con2 h3").addClass("on");
    }
    if (a >= 1200) {
      $(".con2_2 li:nth-of-type(1)").addClass("on");
    }
    if (a >= 1350) {
      $(".con2_2 li:nth-of-type(2)").addClass("on");
    }
    if (a >= 1600) {
      $(".con2_2 li:nth-of-type(3)").addClass("on");
    }
    if (a >= 2200) {
      $(".con3_1").addClass("on");
    }
    if (a >= 2400) {
      $(".con3_2 li:nth-of-type(1)").addClass("on");
      $(".con3_2 li:nth-of-type(2)").addClass("on");
    }
  } else if (window.matchMedia("(max-width: 391.9px)").matches) {
    let a = window.scrollY;
    console.log("Scroll position:", a);
    if (a >= 90) {
      $(".con1_text h4:nth-of-type(1)").addClass("on");
      $(".con1_text h4:nth-of-type(2)").addClass("on");
      $(".con1_text h4:nth-of-type(3)").addClass("on");
    }
    if (a >= 180) {
      $(".con1_2").addClass("on");
    }
    if (a >= 200) {
      $(".con2_product1").addClass("on");
    }
    if (a >= 300) {
      $("#con2 > h2").addClass("on");
    }
    if (a >= 330) {
      $(".con2_1 li:nth-of-type(1)").addClass("on");
      $(".con2_1 li:nth-of-type(2)").addClass("on");
    }
    if (a >= 400) {
      $("#con2 h3").addClass("on");
    }
    if (a >= 600) {
      $(".con2_2 li:nth-of-type(1)").addClass("on");
      $(".con2_2 li:nth-of-type(2)").addClass("on");
      $(".con2_2 li:nth-of-type(3)").addClass("on");
    }

    if (a >= 1800) {
      $(".con3_1").addClass("on");
      $(".con3_2 li:nth-of-type(1)").addClass("on");
      $(".con3_2 li:nth-of-type(2)").addClass("on");
    }
  }
}
