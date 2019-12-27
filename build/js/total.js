//  FOR INDEX7
$(document).ready(function () {

    var priceText = parseInt($(".price").text());
    totalPrice = $('.total__money').text(priceText);
    console.log(totalPrice, 'this');
    

    $(document).on('keyup keypress blur', '.insurance__div--input', function (event) {
        var percent = 0.03;
        var insuranceInputVal = $(".insurance__div--input").val();
        var reg = /^0+/gi;
        if (this.value.match(reg)) {
            this.value = this.value.replace(reg, '');
        }
        //Input accept only digits
        $(this).val($(this).val().replace(/[^\d].+/, ""));
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }

        if (insuranceInputVal.length > 0) {
            totalPrice = $('.total__money').text(parseInt($(".price").text()));

            var totalPercentVal = percent * insuranceInputVal;
            var totalPercentValRound = Math.ceil(totalPercentVal * 100) / 100;
            var InsurancePercent = $(".insurance__percent").text(totalPercentValRound +' AZN');
            var totalPrice = parseInt($('.total__money').text());
            // var total =totalPrice + totalPercentValRound;
            var total =Math.ceil((totalPrice + totalPercentValRound) *100) / 100;
            var totalMoney = $('.total__money').text(total);
        } else {
            var InsurancePercent = $(".insurance__percent").text('0');
            totalPrice = $('.total__money').text(parseInt($(".price").text()));
        }
    });
  

    $('input[type=radio][data-id=transition]').change(function() {
        var insuranceInputVal = $(".insurance__div--input").val();
        insuranceInputVal = $(".insurance__div--input").val('');
       var InsurancePercent = $(".insurance__percent").text('0');
       totalPrice = $('.total__money').text(parseInt($(".price").text()));
       $('.insurance__input').prop("checked",false) ;
       $('.insurance__div').empty();
     
    });
});

