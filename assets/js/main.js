/*global $*/
$(function () {
  "use strict";
 
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 100) {
      $(".scrollUp").fadeIn();
      $(".navbar").addClass("fixed-top");
      $(".navbar").addClass("shadow");
      $(".navbar").css("padding", "10px 0");
    } else {
      $(".navbar").removeClass("fixed-top");
      $(".navbar").removeClass("shadow");
      $(".navbar").css("padding", "15px 0");
      $(".scrollUp").fadeOut();
    }
  });
  $(".scrollUp").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
   // Show loader as soon as possible (before window loads)
    $(document).ready(function () {
      $(".loading").show().delay(1000).fadeOut(1000);
    });

    // Hide loader after everything finishes loading
    $(window).on("load", function () {
      $(".loading").show().delay(1000).fadeOut(1000);
    });
});
