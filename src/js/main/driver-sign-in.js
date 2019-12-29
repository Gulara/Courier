$(document).ready(function () {
    $('input[type=radio][transition=transition]').change(function () {

        // LOADING SPINNER
        $('.driver-sign__loading-spinner').css({
            'display': 'block'
        });
        $('.driver-sign__loading-spinner').delay(1000).queue(function (next) {
            $(this).css('display', 'none');
            next();
        });



        if (this.id == 'transition-pedestrian') {

            $('.driver-form-for-all, .driver-membership, .driver-sign__btn').delay(1000).queue(function (next) {
                $(this).css('display', 'block');
                next();
            });
            $('.driver-form-for-with-transition').css({
                'display': 'none'
            });
        } else {


            $('.driver-form-for-all, .driver-form-for-with-transition, .driver-membership, .driver-sign__btn').delay(1000).queue(function (next) {
                $(this).css('display', 'block');
                next();
            });
        }
    });


    

    InitRadio('transition');

    function InitRadio(transition) {
        val = 0;
        $.each($(':radio[transition="' + transition + '"]'), function () {
            console.log(1);
            $(this).val(val++);
            $(this).attr('chk', '0');
            $(this).on("click", function (event) {
                SetRadioButtonChkProperty($(this).val(), transition);
                let checkedSiblings = $(this).parent().siblings();
                checkedSiblings.toggle('slow');
            });
        });
    }

    function SetRadioButtonChkProperty(val, transition) {
        $.each($(':radio[transition="' + transition + '"]'), function () {
           
            if ($(this).val() != val)
                $(this).attr('chk', '0');

            else {
                if ($(this).attr('chk') == '0')
                    $(this).attr('chk', '1');
                else {
                    $(this).attr('chk', '0');
                    $(this).prop('checked', false);
                    $('.driver-form-for-all, .driver-form-for-with-transition, .driver-membership, .driver-sign__btn').css({
                        'display': 'none'
                    });
                }
            }
        });
    }


});