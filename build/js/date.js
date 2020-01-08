// FOR INDEX8
$(document).ready(function () {

    var todaySlash = moment().format('DD/MM/YYYY');
    

    // Get the number of days in the current month.
    var daysInMonth = moment().daysInMonth(); // 29
    let response = '';
    for (i = 0; i < daysInMonth; i++) {
        var todaySlash = moment().format('DD/MM/YYYY');
        //  GET THE DATE OF TODAY
        var todayDate = moment().add(i, 'd').format("DD");
        //  GET THE WEEKDAY'S NAME OF TODAY
        var todayWeekDayName = moment().add(i, 'd').format("dd")
        var todayYear = moment().add(i, 'd').format("yy");
        // var currentWeekday = moment().add(i + 1, 'd').format("dd");
        var tomorrowMonth = moment().add(i + 1, 'd').format("MMM");

        var tomorrowSlash = moment().add(i, 'days').format('DD/MM/YYYY');
        response = response + '<div class="date__list form-check">\n' +
            '<input class="date__input form-check-input" type="radio" value="' + tomorrowSlash +
            ' " name="days" data-item-id="date" id="' + i + '"/>' +
            ' <label class="date__label form-check-label "  for="' + i + '" >' +
            '<span class="date__day">' + todayWeekDayName + '</span>' +
            '<span class="date__date">' + todayDate + '</span>' +
            '<span class="date__month">' + tomorrowMonth + '</span>' +
            '</label>\n' +
            '</div>';
    }
    $('.date').html(response);


    $('input:radio[data-item-id="urgent"]').change(

        function () {

            if ($(this).is(':checked') && $(this).val() == 'non-urgent') {
                $('.date').css({
                    'display': 'flex'
                });
            } else if ($(this).is(':checked') && $(this).val() == 'urgent') {
                $('.date').css({
                    'display': 'none'
                });
            }
        });



    var currentHour = moment().startOf('hour').add(1, 'h').format("HH");
    var dayHours = 24;
    var allHours = 24;
    var enableHoursToday = dayHours - currentHour;
    $('.removeMe').each(function (index) {
        if (index != 1)
            $(this).remove();
    });



    $('input:radio[data-item-id="date"]').change(


        function () {

            let radioId = $(this).attr("id");
        
            //  TODAY TIMES
            if ($(this).prop("checked") && radioId == '0') {
               

                // $("input:radio[data-item-id='date']:not(:checked)").attr('value', '');
                for (i = 0; i < allHours; i++) {
                    $('#delivery__time').trigger('remove.owl.carousel', i).trigger('refresh.owl.carousel');
                }
                for (i = 0; i < enableHoursToday; i++) {
                    var currentTime = moment().startOf('hour').add(i + 2, 'h').format("HH:mm");
                    $('#delivery__time').trigger('add.owl.carousel', ['<div class="form-check">\n' +
                        '<input class="times__input form-check-input" type="radio" value="currentTime " name="times" data-item-id="times" id="' + currentTime + '"/>' +
                        ' <label class="times__label  form-check-label"  for="' + currentTime + '" >' + currentTime +
                        '</label>\n' +
                        '</div>'
                    ]).trigger('refresh.owl.carousel');
                }

                //  here
                $(document).on('change', 'input:radio[data-item-id=times]', function () {
                    var TimeVal = $('input[data-item-id=times]:checked').val();
        
                   
                    var checkedDay = $("input:radio[data-item-id='date']:checked");
        
                    console.log(checkedDay);
                    checkedDay.value = todaySlash + " " + TimeVal;
        
                });
            }


            // NEXT DAYS TIMES
            else if ($(this).prop("checked") && radioId != '0') {
                
                // $("input:radio[data-item-id='date']:not(:checked)").attr('value', '');
                for (i = 0; i < allHours; i++) {
                    $('#delivery__time').trigger('remove.owl.carousel', i).trigger('refresh.owl.carousel');
                }
                for (i = 0; i < dayHours; i++) {
                    var tomorrowHours = moment().startOf('day').add(i, 'h').format("HH:mm");
                    $('#delivery__time').trigger('add.owl.carousel', ['<div class="form-check">\n' +
                        '<input class="times__input form-check-input" type="radio" value="' + tomorrowHours +
                        ' " name="times" data-item-id="times" id="' + tomorrowHours + '" />' +
                        ' <label class="times__label  form-check-label"  for="' + tomorrowHours + '" >' + tomorrowHours +
                        '</label>\n' +
                        '</div>'
                    ]).trigger('refresh.owl.carousel');
                }
               

                //  HERE
                $(document).on('change', 'input:radio[data-item-id=times]', function () {
                    var TimeVal = $('input[data-item-id=times]:checked').val();
        
                   
                    var checkedDay = $("input:radio[data-item-id='date']:checked");
        
                    console.log(checkedDay);
                    checkedDay.value = tomorrowSlash + " " + TimeVal;
        
                });
            }
        });

        
});