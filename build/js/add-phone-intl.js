// // // FOR  INDEX.HTML  INDEX-3.HTML İNTERNATİONAL TELEPHONE İNPUT
$(document).ready(function () {

    var input = document.querySelector("#addPhoneNumber"),
  
      errorMsg = document.querySelector("#error-msg"),
      validMsg = document.querySelector("#valid-msg");
      validCheck = document.querySelector(".valid-check");
        //   // initialise plugin
    var iti = window.intlTelInput(input, {
      utilsScript: "libs/intl-tel-input/build/js/utils.js"
    });
    
    
    //   // here, the index maps to the error code returned from getValidationError - see readme
    var errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];
  
    // //   // FOR ACCOUNT-SIGN-IN-COVER2.HTML
    $("#addPhoneNumber").intlTelInput({
      // preferredCountries: ["us", "ca"],
      separateDialCode: false,
      initialCountry: "az",
      autoPlaceholder: "polite",
      // allowDropdown: false,
  
      // separateDialCode: true,
  
    });
  
     countryDialCode = $("#addPhoneNumber").intlTelInput("getSelectedCountryData").dialCode;
    
   
    $('#addPhoneNumber').val('+' + countryDialCode);
    input.addEventListener('countrychange', function () {
  
      var countryDialCode = $("#addPhoneNumber").intlTelInput("getSelectedCountryData").dialCode;
      console.log(countryDialCode);
      $('#addPhoneNumber').val('+' + countryDialCode);
      
    });
   
    let reset = function () {
      input.classList.remove("error");
      errorMsg.innerHTML = "";
      errorMsg.classList.add("valid-hide");
      // validMsg.classList.add("valid-hide");
      validCheck.classList.add("valid-hide");
    };
  
   
  
    //   // on blur: validate
    input.addEventListener('blur', function () {
      reset();
      if (input.value.trim()) {
        if (iti.isValidNumber()) {
          // validMsg.classList.remove("valid-hide");
          validCheck.classList.remove("valid-hide");
        } else {
          input.classList.add("error");
          let errorCode = iti.getValidationError();
          errorMsg.innerHTML = errorMap[errorCode];
          errorMsg.classList.remove("valid-hide");
        }
      }
    });
  
  
    // on keyup / change flag: reset
    input.addEventListener('change', reset);
    input.addEventListener('keyup', reset);
  
  
  
  
  });