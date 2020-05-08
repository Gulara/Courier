$(document).ready(function () {



    $('.ios-switch--display-on').click(function (e) {
        e.preventDefault();
        $('.ios-switch, .ios-switch-div, .ios-switch--display-off, .ios-switch--modal-btn').css({
            'display': 'block'
        });
        $('.ios-switch--display-on').css({
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
      
        .on('change', 'input[data-check=ios-switch-1]', function () {
         
            var checked = $(this).is(':checked');
            if (checked) {
                $('input[data-check=ios-switch-1]').each(function () {
                    $(this).prop("checked", true);
                    $(this).parent().parent().removeClass('ios-switch-disable');
                });
            } else {
                $('input[data-check=ios-switch-1]').each(function () {
                    $(this).prop("checked", false);
                    $(this).parent().parent().addClass('ios-switch-disable');
                });
            }

        }).on('change', 'input[data-check=ios-switch-2]', function () {
            var checked = $(this).is(':checked');

            if (checked) {
                $('input[data-check=ios-switch-2]').each(function () {
                    $(this).prop("checked", true);
                    $(this).parent().parent().removeClass('ios-switch-disable');
                });
            } else {
                $('input[data-check=ios-switch-2]').each(function () {
                    $(this).prop("checked", false);
                    $(this).parent().parent().addClass('ios-switch-disable');
                });
            }

        }).on('change', 'input[data-check=ios-switch-3]', function () {
            var checked = $(this).is(':checked');

            if (checked) {
                $('input[data-check=ios-switch-3]').each(function () {
                    $(this).prop("checked", true);
                    $(this).parent().parent().removeClass('ios-switch-disable');
                });
            } else {
                $('input[data-check=ios-switch-3]').each(function () {
                    $(this).prop("checked", false);
                    $(this).parent().parent().addClass('ios-switch-disable');
                });
            }

        }).on('change', 'input[data-check=ios-switch-4]', function () {
            var checked = $(this).is(':checked');

            if (checked) {
                $('input[data-check=ios-switch-4]').each(function () {
                    $(this).prop("checked", true);
                    $(this).parent().parent().removeClass('ios-switch-disable');
                });
            } else {
                $('input[data-check=ios-switch-4]').each(function () {
                    $(this).prop("checked", false);
                    $(this).parent().parent().addClass('ios-switch-disable');
                });
            }

        }).on('change', 'input[data-check=ios-switch-5]', function () {
            var checked = $(this).is(':checked');

            if (checked) {
                $('input[data-check=ios-switch-5').each(function () {
                    $(this).prop("checked", true);
                    $(this).parent().parent().removeClass('ios-switch-disable');
                });
            } else {
                $('input[data-check=ios-switch-5]').each(function () {
                    $(this).prop("checked", false);
                    $(this).parent().parent().addClass('ios-switch-disable');
                });
            }

        }).on('change', 'input[data-check=ios-switch-6]', function () {
            var checked = $(this).is(':checked');

            if (checked) {
                $('input[data-check=ios-switch-6]').each(function () {
                    $(this).prop("checked", true);
                    $(this).parent().parent().removeClass('ios-switch-disable');
                });
            } else {
                $('input[data-check=ios-switch-6]').each(function () {
                    $(this).prop("checked", false);
                    $(this).parent().parent().addClass('ios-switch-disable');
                });
            }

        }).on('change', 'input[data-check=ios-switch-7]', function () {
            var checked = $(this).is(':checked');

            if (checked) {
                $('input[data-check=ios-switch-7]').each(function () {
                    $(this).prop("checked", true);
                    $(this).parent().parent().removeClass('ios-switch-disable');
                });
            } else {
                $('input[data-check=ios-switch-7]').each(function () {
                    $(this).prop("checked", false);
                    $(this).parent().parent().addClass('ios-switch-disable');
                });
            }

        }).on('change', 'input[data-check=ios-switch-8]', function () {
            var checked = $(this).is(':checked');

            if (checked) {
                $('input[data-check=ios-switch-8]').each(function () {
                    $(this).prop("checked", true);
                    $(this).parent().parent().removeClass('ios-switch-disable');
                });
            } else {
                $('input[data-check=ios-switch-8]').each(function () {
                    $(this).prop("checked", false);
                    $(this).parent().parent().addClass('ios-switch-disable');
                });
            }

        }).on('change', 'input[data-check=ios-switch-9]', function () {
            var checked = $(this).is(':checked');

            if (checked) {
                $('input[data-check=ios-switch-9]').each(function () {
                    $(this).prop("checked", true);
                    $(this).parent().parent().removeClass('ios-switch-disable');
                });
            } else {
                $('input[data-check=ios-switch-9]').each(function () {
                    $(this).prop("checked", false);
                    $(this).parent().parent().addClass('ios-switch-disable');
                });
            }

        })
        .on('change', 'input[data-check]', function () {
          
console.log($('input[data-check]:checked').length);
            if ($('input[data-check]:checked').length == 0) {
                $('.ios-switch--modal-btn, .loading-info__code--container, .loading-info__or, .loading-info__social').css({
                    'display': 'none'
                })

             }else {
       
               
                    $('.ios-switch--modal-btn, .loading-info__code--container, .loading-info__or').css({
                        'display': 'block'
                    });
                    $('.loading-info__social').css({
                        'display': 'flex'
                    })
             
            }
        });
});