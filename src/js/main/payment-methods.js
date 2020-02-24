// FOR INDEX

// PAYMENT METHODS START
function DropDown(el) {
    this.dd = el;
    this.placeholder = this.dd.children('div');
    this.opts = this.dd.find('ul.payment__drop li');
    this.val = '';
    this.index = -1;
    this.initEvents();
}

DropDown.prototype = {
    initEvents: function () {
        var obj = this;
        obj.dd.on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            $(this).toggleClass('active');
           
        });
        obj.opts.on('click', function () {
            var checkmark = '<i class="fas fa-check color-purple ml-auto payment__drop--checkmark"></i>';
            var opt = $(this);
            obj.val = opt.html();
            obj.valText = opt.text();
            obj.index = opt.index();
            obj.placeholder.html(obj.val);
            opt.siblings().removeClass('selected');
            opt.siblings().children().last().removeClass( "fas fa-check payment__drop--checkmark" );
            // opt.siblings().remove( '<i class="fas fa-check color-purple ml-auto payment__drop--checkmark"></i>' );
            opt.filter(':contains("' + obj.valText + '")').addClass('selected');
            var dataID = $(".selected").attr('data-id');
            $("#payment-hidden").val(dataID);
            $( ".selected" ).children().last().addClass( "fas fa-check payment__drop--checkmark" );
            // $( ".selected" ).add('<i class="fas fa-check color-purple ml-auto payment__drop--checkmark"></i>' );
        }).change();
    },
    getValue: function () {
        return this.val;
    },
    getIndex: function () {
        return this.index;
    }
};

$(function () {
    // create new variable for each menu
    var dd1 = new DropDown($('#paymentMethod'));
    // var dd2 = new DropDown($('#other-gases'));
    $(document).click(function () {
        // close menu on document click
        $('.payment__wrap-drop').removeClass('active');
    });
});

// PAYMENT METHODS END

// NEW PAYMENT METHODS WITH RADIO BUTTON
$(document).ready(function () {  
    $('input[type=radio][payment=payment]').change(function () {

      
// PAYMENT DOWN ICON 
        $('.payment__icon').delay(400).queue(function (next) {
            $(this).css('display', 'block');
            next();
        });

    
    });


    // UNCHECKED RADIO BUTTON

    InitRadio('payment');

    function InitRadio(payment) {
        val = 0;
        $.each($(':radio[payment="' + payment + '"]'), function () {
            console.log(1);
            $(this).val(val++);
            $(this).attr('chk', '0');
            $(this).on("click", function (event) {
                SetRadioButtonChkProperty($(this).val(), payment);
                let checkedSiblings = $(this).parent().siblings();
                checkedSiblings.slideToggle('slow');

            });
        });
    }

    function SetRadioButtonChkProperty(val, payment) {
        $.each($(':radio[payment="' + payment + '"]'), function () {

            if ($(this).val() != val)
                $(this).attr('chk', '0');


            else {
                if ($(this).attr('chk') == '0')
                    $(this).attr('chk', '1');

                else {
                    $(this).attr('chk', '0');
                    $(this).prop('checked', false);
                    $('.payment__icon').css({
                        'display': 'none'
                    });
                }
            }
        });
    }
});