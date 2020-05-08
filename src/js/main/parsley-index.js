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

            if ($("input[data-id='payment-div']:checked").length > 0){
                // one ore more checkboxes are checked
              }
              else{
            
              }


            
            if ($("#day-errors").find('.parsley-errors-list').hasClass("filled")) {
                $("#date-error").removeClass('d-none');
              } else{
                $("#date-error").addClass('d-none');
              }

              if ($("#time-errors").find('.parsley-errors-list').hasClass("filled")) {
                $("#time-error").removeClass('d-none');
              } else{
                $("#time-error").addClass('d-none');
              }

         

        })

        .on('#first_form:submit', function () {
         
            return false; // Don't submit form for this demo
        });






});