$('.scroll-down').click(function () {

   

        $("#first_form").animate({ "scrollTop": "+=400px" }, 1500  )
   
});
$("#first_form").on("scroll", function () {
    if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
        $(".scroll-down").css({
            'display': 'none'
        });
    } else {
        $(".scroll-down").css({
            'display': 'block'
        });
    }
});


$( ".index" )
.mouseenter(function() {
  $( ".scroll-style::-webkit-scrollbar-thumb" ).css({
    'visibility: ': 'visible',
    
  });
$( 'html ').removeClass('hide-scrollbar');
  

})
.mouseleave(function() {
    $( 'html ').addClass('hide-scrollbar');
});