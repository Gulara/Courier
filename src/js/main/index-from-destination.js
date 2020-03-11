// NEW PAYMENT METHODS WITH RADIO BUTTON
$(document).ready(function () {

    // $('#form-receiver-first').prop('checked', true);
    // $('#form-receiver-first').attr('chk', '1');
    $('input[type=radio][fromAddress=fromAddress]').change(function () {


        // PAYMENT DOWN ICON 
        $('.form__from-address__icon').delay(400).queue(function (next) {
            $(this).css('display', 'flex');
            next();
        });

        $('.form__from-address__btn-group').css('display', 'flex');


    });


    // UNCHECKED RADIO BUTTON

    InitRadio('fromAddress');

    function InitRadio(fromAddress) {
        val = 0;
        $.each($(':radio[fromAddress="' + fromAddress + '"]'), function () {
            $(this).val(val++);
            $(this).attr('chk', '0');
            // $('#form-fromAdress-first').attr('chk', '1');
            $(this).on("click", function (event) {
                SetRadioButtonChkProperty($(this).val(), fromAddress);
                let checkedSiblings = $(this).parent().siblings();
                checkedSiblings.slideToggle('slow');
                $('.form__from-address__add-btn').slideToggle('slow');

            });
        });
    }

    function SetRadioButtonChkProperty(val, fromAddress) {
        $.each($(':radio[fromAddress="' + fromAddress + '"]'), function () {



            if ($(this).val() != val)
                $(this).attr('chk', '0');


            else {
                if ($(this).attr('chk') == '0')
                    $(this).attr('chk', '1');

                else {
                    $(this).attr('chk', '0');
                    $(this).prop('checked', false);
                    $('.form__from-address__icon').css({
                        'display': 'none'
                    });

                }
            }
        });
    }




    $('.form__from-address__add-btn').click(function (e) {
        e.preventDefault();

        $('#from-address').slideDown(1500);
        $('.form__from-address__form-group').slideUp(1500);
        $(this).slideUp(0);
        $('.form__from-address__cancel-btn').slideDown(1500);


    });
    $('.form__from-address__cancel-btn').click(function (e) {
        e.preventDefault();
        $(this).slideUp(0);
        $('.form__from-address__add-btn').slideDown(1500);
        $('#from-address').slideUp(1500);
        $('.form__from-address__form-group').slideDown(1500);
    });
});