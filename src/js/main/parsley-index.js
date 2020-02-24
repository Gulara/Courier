// FOR INDEX

$(document).ready(function () {

    // $('input[data-item-id=date]').removeAttr('required');​​​​​
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


            // var group = document.getElementsByTagName('data-id', 'payment-div');
            // console.log(group);
            // for (var i = 0; i < group.length; i++) {
            //     if (group[i].checked)
            //         break;
            // }
            // if (i == group.length)
            //     return alert("No radio button is checked");
            // alert("Radio Button " + (i + 1) + " is checked.");

        })

        .on('#first_form:submit', function () {
            //  $('input[data-item-id=date]').removeAttr('required');​​​​​
            return false; // Don't submit form for this demo
        });






});