
$(document).ready(function () {
	// MASK JQUERY
	$('#driver-birthday').mask('00/00/0000');

	var today = new Date();
	// DATEPICKER
	$( "#driver-birthday" ).datepicker({
        dateFormat: "dd/mm/yy",
			duration: "fast",
			maxDate: today ,


			onSelect: function () {
				var birthdayHidden = $(".driver-birthday-hidden").val($("#driver-birthday").val());
			}
	});
  });


  
$(document).ready(function () {
	// MASK JQUERY
	$('#driver-birthday-all').mask('00/00/0000');

	var today = new Date();
	// DATEPICKER
	$( "#driver-birthday-all" ).datepicker({
        dateFormat: "dd/mm/yy",
			duration: "fast",
			maxDate: today ,
			onSelect: function () {
				var allBirthdayHidden = $(".driver-birthday-all-hidden").val($("#driver-birthday-all").val());
			}
			
	});
  });