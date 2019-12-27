// FOR INDEX

$(document).ready(function () {
    $('#first_form').parsley().on('field:validated', function () {
            var ok = $('.parsley-error').length === 0

            $('.insurance__div--input-group').find('.parsley-errors-list').css({
                'order': '3',

                'flexWrap': 'wrap',
                'width': '100%'
            });

        })

        .on('form:submit', function () {
            return false; // Don't submit form for this demo
        });
});