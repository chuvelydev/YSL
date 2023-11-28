$(function () {
  window.addEventListener("scroll", function () {
    let a = window.scrollY;
    console.log("Scroll position:", a);

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
