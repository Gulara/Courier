$(document).ready(function () {

    $('.ios-switch').click(function () {
        var a;
        if ($(this)[0].checked) {
            a = "true";
            $(this).parent().parent().removeClass('ios-switch-disable');

        } else {
            a = "false";
            $(this).parent().parent().addClass('ios-switch-disable');

        }

    });



});