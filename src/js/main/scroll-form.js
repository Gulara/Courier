$(document).ready(function () {
    // Create array for setTimeouts
    var timeouts = [];

    $(window).mousemove(function () {

        // Add class that enables scroll
        $("#first_form").addClass("show-scroll");

        // Clear all setTimeouts
        for (var i = 0; i < timeouts.length; i++) {
            clearTimeout(timeouts[i]);
        }

        // Start a new setTimeout to disable scoll after 2 seconds
        timeouts.push(setTimeout(hideScroll, 1500));

    });


    function hideScroll() {

        // Disable scroll in ALL divs with .hover-scroll
        $("#first_form").removeClass("show-scroll");

    }

    $('.scroll-down').click(function (e) {

e.preventDefault();

        $("#first_form").animate({
            "scrollTop": "+=400px"
        }, 1500)

    });
    $("#first_form").on("scroll", function () {
        console.log($(this).scrollTop());
        if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight ) {
            $(".scroll-down").css({
                'display': 'none'
            });
        } else {
            $(".scroll-down").css({
                'display': 'block'
            });
        }
    });








});