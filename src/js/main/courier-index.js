// NEW PAYMENT METHODS WITH RADIO BUTTON
$(document).ready(function () {

    $('#form-receiver-first').prop('checked', true);
    $('#form-receiver-first').attr('chk', '1');
    $('input[type=radio][receiver=receiver]').change(function () {


        // PAYMENT DOWN ICON 
        $('.form__receiver__icon').delay(400).queue(function (next) {
            $(this).css('display', 'flex');
            next();
        });

        $('.form__receiver__btn-group').css('display', 'flex');


    });


    // UNCHECKED RADIO BUTTON

    InitRadio('receiver');

    function InitRadio(receiver) {
        val = 0;
        $.each($(':radio[receiver="' + receiver + '"]'), function () {
            $(this).val(val++);
            $(this).attr('chk', '0');
            $('#form-receiver-first').attr('chk', '1');
            $(this).on("click", function (event) {
                SetRadioButtonChkProperty($(this).val(), receiver);
                let checkedSiblings = $(this).parent().siblings();
                checkedSiblings.slideToggle('slow');

            });
        });
    }

    function SetRadioButtonChkProperty(val, receiver) {
        $.each($(':radio[receiver="' + receiver + '"]'), function () {



            if ($(this).val() != val)
                $(this).attr('chk', '0');


            else {
                if ($(this).attr('chk') == '0')
                    $(this).attr('chk', '1');

                else {
                    $(this).attr('chk', '0');
                    $(this).prop('checked', false);
                    $('.form__receiver__icon').css({
                        'display': 'none'
                    });
                }
            }
        });
    }




    $('.form__receiver__add-btn').click(function (e) {
        e.preventDefault();

        $('#receiver').slideDown(1500);
        $('.form__receiver__form-group').slideUp(1500);


     
    });
    $('.form__receiver__cancel-btn').click(function (e) {
        e.preventDefault();


        $('#receiver').slideUp(1500);
        $('.form__receiver__form-group').slideDown(1500);
    });
});