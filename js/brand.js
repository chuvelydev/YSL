$(function () {
  window.addEventListener("scroll", function () {
    let a = window.scrollY;
    console.log("Scroll position:", a);

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
  });
});
