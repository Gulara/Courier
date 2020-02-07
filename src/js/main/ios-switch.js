
// FOR LOADING-END, LOADING-END-1

$(document).ready(function () {

    $('.ios-switch').click(function () {
        var iosSwitch;
        if ($(this)[0].checked) {
            iosSwitch = "true";
            $(this).parent().parent().removeClass('ios-switch-disable');
         
        } else {
            iosSwitch = "false";
            $(this).parent().parent().addClass('ios-switch-disable');

        }

    });



});