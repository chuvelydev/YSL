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
  $(".small li").on("click", function () {
    let i = $(this).index();
    $(".large li").eq(i).css({ display: "block" });
    $(".large li").hide();
    $(".large li").eq(i).show();
    $(".small li").css({ border: "none" });
    $(this).css({ border: "2px solid #ccc" });
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

    if (a >= 800) {
      $(".con1_text li:nth-of-type(1)").addClass("on");
      $(".con1_text li:nth-of-type(2)").addClass("on");
    }
    if (a >= 1000) {
      $(".con2_product1").addClass("on");
    }
    if (a >= 2000) {
      $("#con3 li:nth-of-type(1)").addClass("on");
      $("#con3 li:nth-of-type(2)").addClass("on");
    }
    if (a >= 2800) {
      $("#con4 > p").addClass("on");
      $("#con4 h2").addClass("on");
    }
    if (a >= 3100) {
      $(".con4_list").addClass("on");
      $(".con4_list2").addClass("on");
      $(".con4_box").addClass("on");
    }
  } else if (
    window.matchMedia("(min-width: 768px) and (max-width: 1220.9px)").matches
  ) {
    let a = window.scrollY;

    if (a >= 375) {
      $(".con1_text li:nth-of-type(1)").addClass("on");
      $(".con1_text li:nth-of-type(2)").addClass("on");
    }
    if (a >= 800) {
      $(".con2_product1").addClass("on");
    }
    if (a >= 1800) {
      $("#con3 li:nth-of-type(1)").addClass("on");
      $("#con3 li:nth-of-type(2)").addClass("on");
    }
    if (a >= 2400) {
      $("#con4 > p").addClass("on");
      $("#con4 h2").addClass("on");
    }
    if (a >= 2600) {
      $(".con4_list").addClass("on");
      $(".con4_list2").addClass("on");
      $(".con4_box").addClass("on");
    }
  } else if (
    window.matchMedia("(min-width: 392px) and (max-width: 767.9px)").matches
  ) {
    let a = window.scrollY;
    console.log("Scroll position:", a);
    if (a >= 200) {
      $(".con1_text li:nth-of-type(1)").addClass("on");
      $(".con1_text li:nth-of-type(2)").addClass("on");
    }
    if (a >= 600) {
      $(".con2_product1").addClass("on");
    }
    if (a >= 1200) {
      $("#con3 li:nth-of-type(1)").addClass("on");
    }
    if (a >= 1700) {
      $("#con3 li:nth-of-type(2)").addClass("on");
    }
    if (a >= 2200) {
      $("#con4 > p").addClass("on");
      $("#con4 h2").addClass("on");
    }
    if (a >= 2300) {
      $(".con4_list").addClass("on");
      $(".con4_list2").addClass("on");
      $(".con4_box").addClass("on");
    }
  } else if (window.matchMedia("(max-width: 391.9px)").matches) {
    let a = window.scrollY;
    console.log("Scroll position:", a);

    if (a >= 0) {
      $(".con1_text li:nth-of-type(1)").addClass("on");
      $(".con1_text li:nth-of-type(2)").addClass("on");
    }
    if (a >= 120) {
      $(".con2_product1").addClass("on");
    }
    if (a >= 700) {
      $("#con3 li:nth-of-type(1)").addClass("on");
      $("#con3 li:nth-of-type(2)").addClass("on");
    }
    if (a >= 1300) {
      $("#con4 > p").addClass("on");
      $("#con4 h2").addClass("on");
    }
    if (a >= 1400) {
      $(".con4_list").addClass("on");
      $(".con4_list2").addClass("on");
      $(".con4_box").addClass("on");
    }
  }
}
