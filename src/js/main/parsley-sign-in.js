$(document).ready(function () {

  $('#sign-in-form').parsley().on('field:validated', function () {
    var ok = $('.parsley-error').length === 0

    $("#phoneNumber").removeClass('parsley-success');
   
    var parsleyError = $('#sign-in-form').find('.parsley-error')
  
  })

    .on('#sign-in-form:submit', function () {
      return false; // Don't submit form for this demo
    });

});