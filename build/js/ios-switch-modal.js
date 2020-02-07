$(document).ready(function () {


    $('.ios-switch--display-on').click(function (e) {
        e.preventDefault();
        $('.ios-switch, .ios-switch-div, .ios-switch--display-off, .ios-switch--modal-btn').css({
            'display': 'block'
        });
        $(this).css({
            'display': 'none'
        });

    });
    $('.ios-switch--display-off').click(function (e) {
        e.preventDefault();
        $('.ios-switch, .ios-switch-div, .ios-switch--display-off, .ios-switch--modal-btn').css({
            'display': 'none'
        });
        $('.ios-switch--display-on').css({
            'display': 'block'
        });
        $('.ios-switch').parent().parent().removeClass('ios-switch-disable');
        $('.ios-switch').prop("checked", "true")
    });


    //    $('.ios-switch').click(function () {
    //         var iosSwitch;
    //         var currentClass = $(this).attr('data-id');
    //         if ($(this)[0].checked &&) {
    //             iosSwitch = "true";
    //             $(currentClass).prop('checked', true);
    //             $(this).parent().parent().removeClass('ios-switch-disable');

    //         } else {
    //             iosSwitch = "false";
    //             currentClass.prop('checked', false);
    //             $(this).parent().parent().addClass('ios-switch-disable');

    //         }

    //     });


    //   COPY CODE ON MODAL

    $('body').on("mouseenter", ".loading-info__code--div", function () {
            $(".loading-info__tooltip").css({
                'display': "block"
            });
            $(".loading-info__tooltip").html("Copy");
        }).on("mouseleave", ".loading-info__code--div", function () {
            $(".loading-info__tooltip").css({
                'display': "none"
            });
        }).on('click', '.loading-info__code--div', function () {
            $(".loading-info__tooltip").css({
                'display': "block",
            });
            $(".loading-info__tooltip").html("Copied!");
            var $tempElement = $("<input>");
            // $("body").append($tempElement);
            $("#loadingEndModal").append($tempElement);
            $tempElement.val($(this).find(".loading-info__code").text()).select();
            document.execCommand("Copy");
            $tempElement.remove();
        })
        // .on('change', `input[data-check=ios-switch-${num}]`, function () {
        //     var checked = $(this).is(':checked');
        //     if (checked) {
        //         $(`input[data-check=ios-switch-${num}]`).each(function () {
        //             $(this).prop("checked", true);
        //             $(this).parent().parent().removeClass('ios-switch-disable');
        //         });
        //     } else {
        //         $(`input[data-check=ios-switch-${num}]`).each(function () {
        //             $(this).prop("checked", false);
        //             $(this).parent().parent().addClass('ios-switch-disable');
        //         });
        //     }
        // })
        .on('change', 'input[data-check-modal]', function () {
            var checked = $(this).is(':checked');
            var modalCheck = $(this).attr("data-check-modal");
            const dataCheck = $('input').attr("data-check");
          
            $('input[data-check]').each(function () {
                var term = $('.ios-switch').attr('data-check');
                console.log(term);
            });


            if (checked) {
                $(this).each(function () {
                    $(this).prop("checked", true);
                    $(this).parent().parent().removeClass('ios-switch-disable');
                   
                });
            } else {
                $(this).each(function () {
                    $(this).prop("checked", false);
                    $(this).parent().parent().addClass('ios-switch-disable');
                });
            }
        });



    // $(`input[data-check=ios-switch-${num}]`).change(function () {
    //     var checked = $(this).is(':checked');
    //     if (checked) {
    //         $(`input[data-check=ios-switch-${num}]`).each(function () {
    //             $(this).prop("checked", true);
    //             $(this).parent().parent().removeClass('ios-switch-disable');
    //         });
    //     } else {
    //         $(`input[data-check=ios-switch-${num}]`).each(function () {
    //             $(this).prop("checked", false);
    //             $(this).parent().parent().addClass('ios-switch-disable');
    //         });
    //     }
    // });

});