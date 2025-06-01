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
      const rawHash = window.location.hash.substring(1); // remove the '#'
      if (!rawHash) return;

      const hashText = decodeURIComponent(rawHash).toLowerCase();

      const modals = document.querySelectorAll('[data-toggle="modal"]');
      for (const modal of modals) {
        const h4 = modal.querySelector('h4');
        if (h4 && h4.textContent.trim().toLowerCase().includes(hashText)) {
          modal.click();
          break;
        }
      }
    });
    $(window).on("hashchange", function () {
      window.location.reload();
    }); 
});
