$(document).ready(function () {
    $(".add-wp").click(function (){
      
        $(".check-wp").css({
            "display": "flex"
        });
        $( ".check-wp__input" ).prop( "checked", true );
        $("#phoneNumber").addClass('form__phone--input');

        if($(".check-wp__input").prop("checked") == false){
            $(".add-wp").slideDown();
            $(".check-wp").css({
                "display": "none"
            });
            $("#phoneNumber").removeClass('form__phone--input');
        }
        else{
            $(".add-wp").slideUp();
        }
    })

    $('.check-wp__input[type="checkbox"]').click(function(){
        if($(this).prop("checked") == false){
            $(".check-wp").css({
                "display": "none"
            });
            $("#phoneNumber").removeClass('form__phone--input');
        }
        else{
            $(this).slideUp();
        }
    });

});


let response = '';
for (i = 0; i < 1; i++) {
 
    response = response +   '<div class="form-group__phone">\n' +
    '<div class="valid-check valid-hide ">&#10004;</div>' +
    '  <span id="error-receiver-number " ></span>' +
    '<span id="error-msg" class="valid-hide text-danger d-block"></span>' +
    '  <div class="form__phone-group">' +
    ' <input type="text" class="form-control form__control form__phone--' + i + '" id="phoneNumber">'+
    '<div class=" check-wp">' +
    '<input type="checkbox" id="check-wp-'+i+'" class="check-wp__input check-wp-'+i+'">' +
   '<label for="check-wp-'+i+'" class="check-wp__label">' +
   '<i class="fab fa-whatsapp "></i>' +
   '       </label>' +
   '</div>' +
   '<button class="add-phone btn btn-purple" id="add-phone-'+i+'">' +
   '<i class="fas fa-plus "></i>' +
   '    </button>' +
   ' </div>' +
   ' <button class="btn btn-purple add-wp add-wp-'+i+'">Do you have Whatsapp?</button>' +
   '</div>\n';


}
$('.form-group__phone-div').html(response);

var i = 0;
$(`#add-phone-${i}`).click(function () {
            i++;
            $('.form-group__phone').append(
            '<div class="form-group__phone">\n' +
            '<div class="valid-check valid-hide ">&#10004;</div>\n' +
            '  <span id="error-receiver-number " ></span>\n' +
            '<span id="error-msg" class="valid-hide text-danger d-block"></span>\n' +
            '  <div class="form__phone-group">' +
            ' <input type="text" class="form-control form__control form__phone--' + i + '" id="phoneNumber">\n'+
            '<div class=" check-wp">\n' +
            '<input type="checkbox" id="check-wp-'+i+'"" class="check-wp__input check-wp-'+i+'">\n' +
           '<label for="check-wp-'+i+'"" class="check-wp__label">\n' +
           '<i class="fab fa-whatsapp "></i>' +
           '       </label>' +
           '</div>' +
           '<button class="add-phone btn btn-purple" id="add-phone-'+i+'">\n' +
           '<i class="fas fa-minus "></i>\n' +
           '    </button>' +
           ' </div>' +
           ' <button class="btn btn-purple add-wp add-wp-'+i+'">Do you have Whatsapp?</button>\n' +
           '</div>\n'
           
                );
        });