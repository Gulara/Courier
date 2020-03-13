$(document).ready(function($) {
        
    $("#first_form").validate({
    rules: {
        from: "required",                    
        password: {
            required: true,
            minlength: 6
        },
       city: "required",
       form__receiver: "required"
     
    },
    messages: {
        from: "Please enter from Address",                   
        password: {
            required: "Please provide a password",
            minlength: "Your password must be at least 6 characters long"
        },
      city: "Please enter your city",
      form__receiver: "This field is required"
    },
     errorPlacement: function(error, element) 
{
if ( element.is(":radio") ) 
{
    error.appendTo( element.parents('.form__receiver') );
}
else 
{ // This is the default behavior 
    error.insertAfter( element );
}
},
    submitHandler: function(form) {
        form.submit();
    }
    
});
});