// FOR INDEX
// INSURANCE START

$(document).ready(function () {
  
    $(".insurance__input").change(function () {
       
    
        if ($(this).prop("checked") == true) {
            $('.insurance__div').html('<div class="form-label form__label mb-2">Daşınacaq yükün dəyəri :</div>'+
            '<div id="insurance-errors"></div>'+
            ' <div class="input-group insurance__div--input-group">'+
            '  <input type="text" pattern="\\d*" class="form-control insurance__div--input" min="1" aria-label="Insurance input" aria-describedby="insurance__div--money" data-parsley-errors-container="#insurance-errors" data-parsley-required-message="Insurance Money is required" required>'+
            ' <div class="input-group-append"> ' +
            '    <span class="input-group-text" id="insurance__div--money">AZN</span>'+
            ' </div>'+
            ' </div>');

            // $(".insurance__div").animate({ "display": "block" }, 3000  );
            $(".insurance__div").slideDown(800);
            // $('.insurance__div').html('<div class="form-label form__label mb-2">Daşınacaq yükün dəyəri :</div> <div class="input-group insurance__div--input-group">  <input type="text" pattern="\d*" class="form-control insurance__div--input" min="0" aria-label="Insurance input" aria-describedby="insurance__div--money" required> <div class="input-group-append">     <span class="input-group-text" id="insurance__div--money">AZN</span> </div> </div>');
         

      
        }
        else {
            // $(".insurance__div").animate({ "display": "none" }, 3000  );
            $(".insurance__div").slideUp(800);
            var insuranceInputVal = $(".insurance__div--input").val();
            insuranceInputVal = $(".insurance__div--input").val('');
            var InsurancePercent = $(".insurance__percent").text('0');
            totalPrice = $('.total__money').text(parseInt($(".price").text()));
            $('.insurance__div').empty();
        }
    });









    


});

// INSURANCE END