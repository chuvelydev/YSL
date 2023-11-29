$(function () {
  window.addEventListener("scroll", function () {
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
  });
});
