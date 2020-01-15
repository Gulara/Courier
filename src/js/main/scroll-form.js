$('.scroll-down').click(function () {
    document.getElementById("first_form").scrollTop += 400;
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