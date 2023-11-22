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

