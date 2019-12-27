$(document).ready(function () {
 \




  
  $('#my-profile-form').parsley().on('field:validated', function () {
    var ok = $('.parsley-error').length === 0

   
    
  })
    .on('#my-profile-form:submit', function () {
      return false; // Don't submit form for this demo
    });

});