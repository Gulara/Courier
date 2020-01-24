$(document).ready(function () {

var validate_email = function(email){
    var pattern = /^([a-zA-A0-9_.-])+@([a-zA-Z0-9_.-])+([a-zA-Z])+/;
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
  
  $(document).on("focusout", "#my-profile-email", function(){
    var input_val = $(this).val();
    var is_success = validate_email(input_val); 
  
    if(!is_success){
      $("#my-profile-email").focus();
    }
  });

});