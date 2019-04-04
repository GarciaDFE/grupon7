$(".soft-scroll1").on("click", function(e) {
  e.preventDefault();
  let id = $(this).attr("href"),
    targetOffset = $(id).offset().top;

  $("html, body").animate(
    {
      scrollTop: targetOffset - 100
    },
    1500
  );
});

$(".soft-scroll2").on("click", function(e) {
  e.preventDefault();
  let id = $(this).attr("href"),
    targetOffset = $(id).offset().top;

  $("html, body").animate(
    {
      scrollTop: targetOffset - 100
    },
    2000
  );
});
