// FOR INDEX

$(document).ready(function () {
    $('#first_form').parsley().on('field:validated', function () {
            var ok = $('.parsley-error').length === 0

            $('.insurance__div--input-group').find('.parsley-errors-list').css({
                'order': '3',

                'flexWrap': 'wrap',
                'width': '100%'
            });

            $(".delivery__time").find('.parsley-errors-list').css({
                'order': '-1',
            'flexWrap': 'wrap',
                'width': '100%'
            });

            $(".delivery").find('.parsley-errors-list').css({
                'order': '2',
            'flexWrap': 'wrap',
                'width': '100%',
               
            });

            $(".delivery__form-label").css({
                'order': '1',
          
               
            });
            if($('input:radio[data-item-id="date"]').prop("checked")){
                $(".datepicker").removeClass('parsley-error')
            }
           
        })

        .on('form:submit', function () {
            return false; // Don't submit form for this demo
        });
});