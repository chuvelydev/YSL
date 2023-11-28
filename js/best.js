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
  window.addEventListener("scroll", function () {
    let a = window.scrollY;
    console.log("Scroll position:", a);

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
    }
  });
});
