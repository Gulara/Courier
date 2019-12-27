// FOR INDEX7
 $( document ).ready(function() {
    $('.times-carousel').owlCarousel({
      loop: false,
      rewind: true,
    
      nav: false,
      dots: false,
      // autoplay: true,
      // autoplayHoverPause: true,
      responsive: {
        0: {
          items: 4
        },
        600: {
          items: 4
        },
        1000: {
          items: 4
        },
        1200: {
          items: 5
        }
      }
    })
});