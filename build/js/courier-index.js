// NEW PAYMENT METHODS WITH RADIO BUTTON
$(document).ready(function () {

    $('input[type=radio][receiver=receiver]').change(function () {


        // PAYMENT DOWN ICON 
        $('.form__receiver__icon').delay(400).queue(function (next) {
            $(this).css('display', 'flex');
            next();
        });

        $('.form__receiver__btn-group').css('display', 'flex');


    });


    // UNCHECKED RADIO BUTTON

    InitRadioReceiver('receiver');

    function InitRadioReceiver(receiver) {
        val = 0;
        $.each($(':radio[receiver="' + receiver + '"]'), function () {
            $(this).val(val++);
            $(this).attr('chkReceiver', '0');
            // $('#form-receiver-first').attr('chk', '1');
            $(this).on("click", function (event) {
                SetRadioButtonChkReceiverProperty($(this).val(), receiver);
                let checkedSiblings = $(this).parent().siblings();
                checkedSiblings.slideToggle('slow');
                $('.form__receiver__add-btn').slideToggle('slow');

            });
        });
    }

    function SetRadioButtonChkReceiverProperty(val, receiver) {
        $.each($(':radio[receiver="' + receiver + '"]'), function () {



            if ($(this).val() != val)
                $(this).attr('chkReceiver', '0');


            else {
                if ($(this).attr('chkReceiver') == '0')
                    $(this).attr('chkReceiver', '1');

                else {
                    $(this).attr('chkReceiver', '0');
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
        $(this).slideUp(0);
$('.form__receiver__cancel-btn').slideDown(1500);

     
    });
    $('.form__receiver__cancel-btn').click(function (e) {
        e.preventDefault();
        $(this).slideUp(0);
$('.form__receiver__add-btn').slideDown(1500);
        $('#receiver').slideUp(1500);
        $('.form__receiver__form-group').slideDown(1500);
    });
});