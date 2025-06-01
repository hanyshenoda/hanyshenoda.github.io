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
      $(".loading").show().delay(500).fadeOut(500);
    });

    // Hide loader after everything finishes loading
    $(window).on("load", async function () {
        // Properly wait for .delay + .fadeOut to finish
        $(".loading")
            .show()
            .delay(0)
            .fadeOut(1000);

        await $(".loading").promise(); // This waits for the whole animation queue to finish

        const rawHash = window.location.hash.substring(1);
        if (!rawHash) return;

        const hashText = decodeURIComponent(rawHash).toLowerCase();
        const modals = document.querySelectorAll('[data-toggle="modal"]');

        function scrollToElement(element) {
            return new Promise((resolve) => {
                $('html, body').animate({
                    scrollTop: $(element).offset().top - 200
                }, 1000, function () {
                    setTimeout(resolve, 500);
                });
            });
        }

        for (let idx = 0; idx < modals.length; idx++) {
            const modal = modals[idx];
            const h4 = modal.querySelector('h4');
            const h2 = modal.querySelector('h2');

            if ((h4 && h4.textContent.trim().toLowerCase().includes(hashText))) {
                await scrollToElement(modal);
                modal.click();
            }
            else if ((h2 && h2.textContent.trim().toLowerCase().includes(hashText))) {
              if (idx > 3) showSection('amendments-section')
              await scrollToElement(modal);
              modal.click();
            }
        }
    });
    $(window).on("hashchange", function () {
      window.location.reload();
    }); 
});
