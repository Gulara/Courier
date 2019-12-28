$(document).ready(function () {
    $('.loading-spinner').delay(5000).queue(function (next) {
        $(this).css('display', 'none');
        next();
    });
});