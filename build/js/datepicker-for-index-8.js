
// // //  DATEPICKER START

// $(document).ready(function () {
//     var date = new Date();

//     date.setDate(date.getDate());
//     $("#datepicker").datepicker({
//         startDate: date,
//         duration: "fast",
//         gotoCurrent: true,
//         firstDay: 1,
//         isRTL: false,
//         showMonthAfterYear: false,
//         dateFormat: "dd/mm/yy",
//         yearSuffix: "",
//         minDate: 1, // disable past date
//         minTime: 0, // disable past time

//         // VAXTIN İNPUT NAME=DAY-DƏ  VƏ VALUE-SUNDA GÖRSƏNMƏSİ
//         onSelect: function () {
//             $("label[for='calendar']").text($(this).val());
//             $("input[data-item-id=calendar-date]").attr('data-slash', ($(this).val()));
//             var calendarLabel = $(".calendar-label").text();
           
//             var calendarVal = document.getElementById("calendar");
//             calendarVal.value = calendarLabel ;
//             $(this).change();
           
//         }

        
//     }).on("change", function() {
//         $( "input[data-item-id=calendar-times]" ).prop( "checked", false );
        
//       });
//     // $("#datepicker").datepicker($.datepicker.regional["az"]); 
//     // $("#datepicker").datepicker($.datepicker.regional["ru"]); 
//     $("#datepicker").datepicker($.datepicker.regional["en-AU"]); 
  

//     $("#calendar").click(function () {
//         $("#datepicker").datepicker("show");
//     });

//     $(".ui-datepicker").css({
//         'box-shadow': '-2px 0px 17px 3px rgba(0,0,0,0.55)'

       

//     });
// });

// // //  DATEPICKER END
