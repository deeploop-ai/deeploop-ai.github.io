(function ($) {
  "use strict";

  // Sticky navigation
  $(window).scroll(function () {
    if ($(".navigation").offset().top > 80) {
      $(".navigation").addClass("nav-bg");
    } else {
      $(".navigation").removeClass("nav-bg");
    }
  });

  // Smooth scroll for anchor links
  $('a[href*="#"]').not('[href="#"]').click(function (e) {
    if (
      location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") &&
      location.hostname === this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: target.offset().top - 70 }, 500);
      }
    }
  });

  // Background-images
  $("[data-background]").each(function () {
    $(this).css({
      "background-image": "url(" + $(this).data("background") + ")",
    });
  });

  // background color
  $("[data-color]").each(function () {
    $(this).css({
      "background-color": $(this).data("color"),
    });
  });

  // progress bar
  $("[data-progress]").each(function () {
    $(this).css({
      bottom: $(this).data("progress"),
    });
  });

  // testimonial-slider
  if ($(".testimonial-slider").length) {
    $(".testimonial-slider").slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      arrows: false,
      adaptiveHeight: true,
    });
  }

  // clients logo slider
  if ($(".client-logo-slider").length) {
    $(".client-logo-slider").slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      dots: false,
      arrows: false,
      responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
        { breakpoint: 600, settings: { slidesToShow: 3, slidesToScroll: 1 } },
        { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 1 } },
        { breakpoint: 400, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      ],
    });
  }

  // Shuffle js filter and masonry
  if ($(".shuffle-wrapper").length && window.Shuffle) {
    var myShuffle = new window.Shuffle(document.querySelector(".shuffle-wrapper"), {
      itemSelector: ".shuffle-item",
      buffer: 1,
    });

    $('input[name="shuffle-filter"]').on("change", function (evt) {
      var input = evt.currentTarget;
      if (input.checked) {
        myShuffle.filter(input.value);
      }
    });
  }
})(jQuery);
