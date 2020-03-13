// FROM METHODS WITH RADIO BUTTON
$(document).ready(function () {

    $('input[type=radio][fromAddress=fromAddress]').change(function () {


        //FROM DOWN ICON 
        $('.form__from-address__icon').delay(400).queue(function (next) {
            $(this).css('display', 'flex');
            next();
        });

        $('.form__from-address__btn-group').css('display', 'flex');


    });


    // UNCHECKED RADIO BUTTON

    InitRadioFromAddress('fromAddress');

    function InitRadioFromAddress(fromAddress) {
        val = 0;
        $.each($(':radio[fromAddress="' + fromAddress + '"]'), function () {
            $(this).val(val++);
            $(this).attr('chkFromAddress', '0');
            $(this).on("click", function (event) {
                SetRadioButtonChkFromAddressProperty($(this).val(), fromAddress);
                let checkedSiblings = $(this).parent().siblings();
                checkedSiblings.slideToggle('slow');
            });
        });
    }

    function SetRadioButtonChkFromAddressProperty(val, fromAddress) {
        $.each($(':radio[fromAddress="' + fromAddress + '"]'), function () {



            if ($(this).val() != val)  $(this).attr('chkFromAddress', '0');


            else {
                $(".insurance__input").prop("disabled", false);
               
                $('#startPlace').val('');
                $('#startPlaceLat').val('');
                $('#startPlaceLng').val('');

                // $('.price').text('0');
                $('.total__money').text(parseInt($(".price").text()));
               

                if ($(this).attr('chkFromAddress') == '0') $(this).attr('chkFromAddress', '1');



                else {
                    $(this).attr('chkFromAddress', '0');
                    $(this).prop('checked', false);
                    $(".insurance__div").slideUp(800);
                    $('.form__from-address__icon').css({
                        'display': 'none'
                    });
                    $(".insurance__input").prop("disabled", true);
                    $(".insurance__input").prop("checked", false);
                    $(".insurance__div").slideUp(800);
                    $(".insurance__div--input").val('');
                    $(".insurance__percent").text('0');
                  
                    // $('.price').text('0');
                    $('.total__money').text(parseInt($(".price").text()));
                }
            }
        });
    }




    $('.form__from-address--add-btn').click(function (e) {
        e.preventDefault();

   
        $('.form__from-address__form-group').slideDown(1500);
        $(this).slideUp(0);
        $('.form__from-address--close-btn').slideDown(1500);

        $('#startPlace').css({
            'display': 'none'
        });
        $(".insurance__input").prop("disabled", true);
        $(".insurance__input").prop("checked", false);
        $(".insurance__div").slideUp(800);
        $(".insurance__div--input").val('');
        $(".insurance__percent").text('0');
      
        // $('.price').text('0');
        $('.total__money').text(parseInt($(".price").text()));
    });
    $('.form__from-address--close-btn').click(function (e) {
        e.preventDefault();
        $(this).slideUp(0);
        $('.form__from-address--add-btn').slideDown(1500);
        $('#from-address').slideUp(1500);
        $('.form__from-address__form-group').slideUp(1000);
        $('#startPlace').css({
            'display': 'block'
        });
         $('input[data-id=from-address-input]').prop('checked', false);
         $('.form__from-address__icon').delay(400).queue(function (next) {
            $(this).css('display', 'none');
            next();
        });
        $('#startPlace').val('');
        $('#startPlaceLat').val('');
        $('#startPlaceLng').val('');
        $(".insurance__input").prop("disabled", true);
        $(".insurance__input").prop("checked", false);
        $(".insurance__div").slideUp(800);
        $(".insurance__div--input").val('');
        $(".insurance__percent").text('0');
       
        // $('.price').text('0');
        $('.total__money').text(parseInt($(".price").text()));
    });
});
// NEW TO METHODS WITH RADIO BUTTON
$(document).ready(function () {

    $('input[type=radio][toAddress=toAddress]').change(function () {


        //TO DOWN ICON 
        $('.form__to-address__icon').delay(400).queue(function (next) {
            $(this).css('display', 'flex');
            next();
        });

        $('.form__to-address__btn-group').css('display', 'flex');


    });


    // UNCHECKED RADIO BUTTON

    InitRadioToAddress('toAddress');

    function InitRadioToAddress(toAddress) {
        val = 0;
        $.each($(':radio[toAddress="' + toAddress + '"]'), function () {
            $(this).val(val++);
            $(this).attr('chkToAddress', '0');
            $(this).on("click", function (event) {
                SetRadioButtonChkToAddressProperty($(this).val(), toAddress);
                let checkedSiblings = $(this).parent().siblings();
                checkedSiblings.slideToggle('slow');
            });
        });
    }

    function SetRadioButtonChkToAddressProperty(val, toAddress) {
        $.each($(':radio[toAddress="' + toAddress + '"]'), function () {



            if ($(this).val() != val)  $(this).attr('chkToAddress', '0');


            else {
                $('#endPlace').val('');
                $('#endPlaceLat').val('');
                $('#endPlaceLng').val('');

                if ($(this).attr('chkToAddress') == '0') $(this).attr('chkToAddress', '1');



                else {
                    $(this).attr('chkToAddress', '0');
                    $(this).prop('checked', false);
                    $(".insurance__div").slideUp(800);
                    $('.form__to-address__icon').css({
                        'display': 'none'
                    });
                 
                 
                }
            }
        });
    }




    $('.form__to-address--add-btn').click(function (e) {
        e.preventDefault();

   
        $('.form__to-address__form-group').slideDown(1500);
        $(this).slideUp(0);
        $('.form__to-address--close-btn').slideDown(1500);

        $('#endPlace').css({
            'display': 'none'
        });
      
    });
    $('.form__to-address--close-btn').click(function (e) {
        e.preventDefault();
        $(this).slideUp(0);
        $('.form__to-address--add-btn').slideDown(1500);
        $('#to-address').slideUp(1500);
        $('.form__to-address__form-group').slideUp(1000);
        $('#endPlace').css({
            'display': 'block'
        });
         $('input[data-id=to-address-input]').prop('checked', false);
         $('.form__to-address__icon').delay(400).queue(function (next) {
            $(this).css('display', 'none');
            next();
        });
        $('#endPlace').val('');
        $('#endPlaceLat').val('');
        $('#endPlaceLng').val('');
    });
});