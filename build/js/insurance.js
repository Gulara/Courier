// FOR INDEX
// INSURANCE START

$(document).ready(function () {
    $(".insurance__input").change(function () {

        if ($(this).prop("checked") == true) {
            // $('.insurance__div').html('<div class="form-label form__label mb-2">Daşınacaq yükün dəyəri :</div> <div class="input-group insurance__div--input-group">  <input type="text" pattern="\d*" class="form-control insurance__div--input" min="0" aria-label="Insurance input" aria-describedby="insurance__div--money" required> <div class="input-group-append">     <span class="input-group-text" id="insurance__div--money">AZN</span> </div> </div>');
            $('.insurance__div').html('<div class="form-label form__label mb-2">'+
             'Daşınacaq yükün dəyəri :</div> <div class="input-group insurance__div--input-group">'+
             '  <input type="text" pattern="\\d*" class="form-control insurance__div--input" min="1" aria-label="Insurance input" aria-describedby="insurance__div--money" required>'+
             ' <div class="input-group-append"> ' +
             '    <span class="input-group-text" id="insurance__div--money">AZN</span>'+' </div>'+' </div>');
        }
        else {
            var insuranceInputVal = $(".insurance__div--input").val();
            insuranceInputVal = $(".insurance__div--input").val('');
            var InsurancePercent = $(".insurance__percent").text('0');
            totalPrice = $('.total__money').text(parseInt($(".price").text()));
            $('.insurance__div').empty();
        }
    });
});

// INSURANCE END