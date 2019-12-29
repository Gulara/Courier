
$(document).ready(function () {
	// MASK JQUERY
	$('#driver-birthday').mask('00/00/0000');

	var today = new Date();
	// DATEPICKER
	$( "#driver-birthday" ).datepicker({
        dateFormat: "dd/mm/yy",
			duration: "fast",
			maxDate: today 
	});
  });