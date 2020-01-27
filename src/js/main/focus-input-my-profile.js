$(document).ready(function () {

var validate_email = function(email){
    // var pattern = /^([a-zA-A0-9_.-])+@([a-zA-Z0-9_.-])+([a-zA-Z])+/;
    var pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var is_email_valid = false;

   
    if(email.match(pattern) != null){
      is_email_valid = true;
    }
    return is_email_valid;
  }
  
  $(document).on("keyup", "#my-profile-email", function(event){
    var keypressed = event.which;
    var input_val = $(this).val();
    var is_success = true;
    if(keypressed == 9){
      is_success = validate_email(input_val);   
      if(!is_success){
        $(this).focus();
      }
    }
  });
  
  $(document).on("keyup", "#my-profile-email", function(){
    var input_val = $(this).val();
    var is_success = validate_email(input_val); 
    var lblError = document.getElementById("lblError");
    if(!is_success){
      $("#my-profile-email").css({
        'border': "1px solid red"
      });
      $(".error-x").css({
        'display': "block"
      });

      $(".true-check").css({
        'display': "none"
      });
      lblError.innerHTML = "Invalid email address.";
    }else{
      $("#my-profile-email").css({
        'border': "1px solid green"
      });
      $(".true-check").css({
        'display': "block"
      });
      $(".error-x").css({
        'display': "none"
      });
      lblError.innerHTML = "";
    }
  });

});