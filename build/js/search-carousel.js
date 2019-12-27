// FOR   İNDEX
 $( document ).ready(function() {
    $('.search-carousel').owlCarousel({
      loop: false,
      rewind: true,
      autoWidth:true,
      margin:10,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 2
        },
        600: {
          items: 4
        },
        1000: {
          items: 5
        },
        1200: {
          items: 7
        }
      }
    })
});