$(document).ready(function () {
$('input:radio[data-item-id="urgent"]').change(
    function () {

        if ($(this).is(':checked') && $(this).val() == 'non-urgent') {
        
            $('.wave-left').removeClass('wave-up-left');
            $('.wave-right').removeClass('wave-down-right');
            $('.wave-left').addClass('wave-down-left');
            $('.wave-right').addClass('wave-up-right');
            
           
        } else if ($(this).is(':checked') && $(this).val() == 'urgent') {
            $('.wave-left').addClass('wave-up-left');
            $('.wave-right').addClass('wave-down-right');
            $('.wave-left').removeClass('wave-down-left');
            $('.wave-right').removeClass('wave-up-right');
        }
    });

});