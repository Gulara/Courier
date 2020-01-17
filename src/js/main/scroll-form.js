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