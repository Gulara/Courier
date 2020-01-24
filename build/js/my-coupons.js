$(document).ready(function () {
$(".my-coupons__code--container")
    .mouseenter(function () { 
        $(".my-coupons__tooltip").css({
            'display': "block"
        });
        $(".my-coupons__tooltip").html("Copy")
    })
    .mouseleave(function () {
        $(".my-coupons__tooltip").css({
            'display': "none"
        });
        
    })
    .click(function () {
        $(".my-coupons__tooltip").css({
            'display': "block"
        });
        $(".my-coupons__tooltip").html("Copied!");
        var $tempElement = $("<input>");
        $("body").append($tempElement);
        $tempElement.val($(this).find(".my-coupons__code").text()).select();
        document.execCommand("Copy");
        $tempElement.remove();
    });
});