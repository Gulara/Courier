
// //  DATEPICKER START

$(document).ready(function () {
    var date = new Date();

    date.setDate(date.getDate());
    $("#datepicker").datepicker({
        startDate: date,
        duration: "fast",
        gotoCurrent: true,
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        dateFormat: "dd/mm/yy",
        yearSuffix: "",
        minDate: 0, // disable past date
        minTime: 0, // disable past time

        // VAXTIN İNPUT NAME=DAY-DƏ  VƏ VALUE-SUNDA GÖRSƏNMƏSİ
        onSelect: function () {
            $( "input[data-item-id=calendarTimes]" ).prop( "checked", false );
            $("label[for='calendar']").text($(this).val());
            var calendarLabel = $(".calendar-label").text();
            var calendarVal = document.getElementById("calendar");
            calendarVal.value = calendarLabel ;
            
        }
    });
    // $("#datepicker").datepicker($.datepicker.regional["az"]); 
    // $("#datepicker").datepicker($.datepicker.regional["ru"]); 
    $("#datepicker").datepicker($.datepicker.regional["en-AU"]); 
  

    $("#calendar").click(function () {
        $("#datepicker").datepicker("show");
    });
});

// //  DATEPICKER END
