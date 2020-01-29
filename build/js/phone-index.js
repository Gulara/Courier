$(document).ready(function () {
  for (num = 0; num < 3; num++) {
    $(document).on("focus", `.form__phone-${num}`, function (e) {
      e.preventDefault();
      $(this).parents('.form__phone-group').find(".check-wp").css({
        'background': '#fff',
        'borderColor': '#2568ef'
      })

      if ($(this).parents('.form__phone-group').find(".check-wp").css('display') === 'none') {
        $(this).parents('.form__phone-group').next().slideDown();
      } else {

      }


    });
    $(document).on("blur", `.form__phone-${num}`, function (e) {
      e.preventDefault();
      $(this).parents('.form__phone-group').next().slideUp();
      $(this).parents('.form__phone-group').find(".check-wp").css({
        'background': '#f5f5f5',
        'borderColor': '#eaedf2'

      })
    });

    $(document).on("click", `.add-wp-${num}`, function (e) {
      e.preventDefault();
      $(this).siblings('.form__phone-group').find(".check-wp").css({
        "display": "flex"
      });
      $(this).siblings('.form__phone-group').find(".check-wp__input").prop("checked", true);
      $(this).siblings('.form__phone-group').find(".form__phone").addClass('form__phone--input');
      $(this).slideUp();
    });
    $(document).on("click", `.check-wp__input-${num}`, function () {

      $(this).prop("checked", false);
      $(this).parent().css({
        "display": "none"
      });
      $(this).parents('.form__phone-group').find(".form__phone").removeClass('form__phone--input');
    });
  }

});


// Add row
var row = 1;
var remaining = 2;


function UpdateRemaining(isAdd) {
  if (isAdd) {
    remaining = remaining - 1;
  } else {
    remaining = remaining + 1;
  }

  $('#remaining').text(remaining);
  if (remaining == 0) {
    $('.add-phone').prop("disabled", true);
  } else {
    $('.add-phone').prop("disabled", false);
  }
}
$(document).on("click", ".add-phone", function (e) {
  e.preventDefault();

  var new_row = '<div class="form-group__phone" id="row' + row + '">' +
    '<div class="valid-check valid-hide  valid-check-' + row + '">&#10004;</div>' +
    '  <span id="error-receiver-number " ></span>' +
    '<span id="error-msg" class="valid-hide text-danger d-block  text-right error-msg-' + row + '"></span>' +
    '  <div class="form__phone-group">' +
    ' <input type="text" class="form-control form__control form__phone form__phone-' + row + '" id="phoneNumber-' + row + '">' +
    '<div class=" check-wp">' +
    '<input type="checkbox" id="check-wp__input-' + row + '" class="check-wp__input check-wp__input-' + row + '">' +
    '<label for="check-wp__input-' + row + '" class="check-wp__label">' +
    '<i class="fab fa-whatsapp "></i>' +
    '       </label>' +
    '</div>' +
    '<button class="remove-phone btn btn-purple delete-row" id="add-phone-' + row + '">' +
    '<i class="fas fa-minus "></i>' +
    '    </button>' +
    ' </div>' +
    ' <button class="btn btn-purple add-wp add-wp-' + row + '"> <div class="add-wp--square"></div>   Has Whatsapp?</button>' +
    '</div>'




  $('.form-group__phone-div').append(new_row);

  UpdateRemaining(true);


  let num = row;
  console.log(num)
  var input = document.querySelector(`#phoneNumber-${num}`),

    errorMsg = document.querySelector(`.error-msg-${num}`),
    validMsg = document.querySelector("#valid-msg");
  validCheck = document.querySelector(`.valid-check-${num}`);
  //   // initialise plugin
  var iti = window.intlTelInput(input, {
    utilsScript: "libs/intl-tel-input/build/js/utils.js"
  });

  //   // here, the index maps to the error code returned from getValidationError - see readme
  var errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];

  // //   // FOR ACCOUNT-SIGN-IN-COVER2.HTML
  $(`#phoneNumber-${num}`).intlTelInput({
    
    separateDialCode: false,
    initialCountry: "az",
    autoPlaceholder: "polite",
   

  });

  countryDialCode = $(`#phoneNumber-${num}`).intlTelInput("getSelectedCountryData").dialCode;


  $(`#phoneNumber-${num}`).val('+' + countryDialCode);
  input.addEventListener('countrychange', function () {

    var countryDialCode = $(`#phoneNumber-${num}`).intlTelInput("getSelectedCountryData").dialCode;
    console.log(countryDialCode);
    $(`#phoneNumber-${num}`).val('+' + countryDialCode);

  });

  let reset = function () {
    input.classList.remove("error");
    errorMsg.innerHTML = "";
    errorMsg.classList.add("valid-hide");
  
    validCheck.classList.add("valid-hide");
  };



  //   // on blur: validate
  input.addEventListener('blur', function () {
    console.log(validCheck)
    reset();
    if (input.value.trim()) {
      if (iti.isValidNumber()) {
       
        validCheckPhone = document.querySelector(`.valid-check-${num}`);
        validCheckPhone.classList.remove("valid-hide");
      } else {
        input.classList.add("error");
        let errorCode = iti.getValidationError();
        
        errorMsg.innerHTML = errorMap[errorCode];
        validCheckPhone = document.querySelector(`.valid-check-${num}`);
        validCheckPhone.classList.add("valid-hide");
        errorMsg.classList.remove("valid-hide");
      }
    }
  });


  // on keyup / change flag: reset
  input.addEventListener('change', reset);
  input.addEventListener('keyup', reset);

  row++;

  return false;

});

// Remove criterion
$(document).on("click", ".delete-row", function () {
  //  alert("deleting row#"+row);
  if (row > 1) {
    $(this).closest('.form-group__phone').remove();
    row--;
  }
  UpdateRemaining(false);
  return false;
});