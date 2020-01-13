$('.scroll-down').click(function() {

    document.getElementById("first_form").scrollTop += 400;
    var scrollTop =  $("#first_form").scrollTop();
    if (scrollTop >= 1200) {
        // alert('hi');
        $(".scroll-down").css({
            'display': 'none'
        });
    } else {
        $(".scroll-down").css({
            'display': 'block'
        });
    }
});
$("#first_form").on("scroll", function() {
    var scrollTop =  $("#first_form").scrollTop();
    if (scrollTop >= 1200) {
        // alert('hi');
        $(".scroll-down").css({
            'display': 'none'
        });
    } else {
        $(".scroll-down").css({
            'display': 'block'
        });
    }
});


