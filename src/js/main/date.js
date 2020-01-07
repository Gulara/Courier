// FOR INDEX8
$(document).ready(function () {

    // var todayDate = moment().locale("az").format("DD");
    // console.log(todayDate);

    // console.log(todayWeekDayName);

    // //  GET THE MONTH NAME OF TODAY
    // var todayMonth = moment().locale("az").format("MMMM");
    // console.log(todayMonth);

    // GET THE DATE OF TOMORROW 
    // var tomorrowDate = moment().add(1, 'days').format("DD");
    // console.log(tomorrowDate);

    // GET THE MONTH OF TOMORROW
    // var tomorrowMonth = moment().add(1, 'days').format("MMMM");
    // console.log(tomorrowMonth);

    //  GET THE WEEKDAY'S NAME OF TOMORROW
    // var tomorrowWeekDayName = moment().add(1, 'days').format("dddd")
    // console.log(tomorrowWeekDayName);


    var todaySlash = moment().format('DD/MM/YYYY');
    var tomorrowSlash = moment().add(1, 'days').format('DD/MM/YYYY');

    // Get the number of days in the current month.
    var daysInMonth = moment().daysInMonth(); // 29
    let response = '';
    for (i = 0; i < daysInMonth; i++) {
        console.log(i);
        //  GET THE DATE OF TODAY
        var todayDate = moment().add(i, 'd').format("DD");
        //  GET THE WEEKDAY'S NAME OF TODAY
        var todayWeekDayName = moment().add(i, 'd').format("dd")
        // var currentWeekday = moment().add(i + 1, 'd').format("dd");
        var tomorrowMonth = moment().add(i + 1, 'd').format("MMM");
        response = response + '<div class="date__list form-check">\n' +
            '<input class="date__input form-check-input" type="radio" value="' + todayDate +
            ' " name="todayTimes" data-item-id="date" id="' + i + '"/>' +
            ' <label class="date__label form-check-label "  for="' + i + '" >' +
            '<span class="date__day">' + todayWeekDayName + '</span>' +
            '<span class="date__date">' + todayDate + '</span>' +
            '<span class="date__month">' +  tomorrowMonth + '</span>' +
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
        $('.removeMe').each(function(index){
            if(index !=1)
                $(this).remove();
         });
    $('input:radio[data-item-id="date"]').change(

       
        function () {
            if ($("input:radio[data-item-id='date']:first").prop("checked")) {
                $('#tomorrow').attr('value', '');
                $('#calendar').attr('value', '');
                $("label[for='calendar']").text('Pick a date');
                for (i = 0; i < allHours; i++) {
                    $('#delivery__time').trigger('remove.owl.carousel', i).trigger('refresh.owl.carousel');
                }
                for (i = 0; i < enableHoursToday; i++) {
                    var currentTime = moment().startOf('hour').add(i + 2, 'h').format("HH:mm");
                    $('#delivery__time').trigger('add.owl.carousel', ['<div class="form-check">\n' +
                        '<input class="times__input form-check-input" type="radio" value=" " name="todayTimes" data-item-id="todayTimes" id="' + i + '"/>' +
                        ' <label class="times__label  form-check-label"  for="' + i + '" >' + currentTime +
                        '</label>\n' +
                        '</div>'
                    ]).trigger('refresh.owl.carousel');
                }

                $(document).on('change', 'input:radio[data-item-id=date]:eq(0)', function () {
                    var TimeVal = $('input[data-item-id=todayTimes]:checked').val();
                    $("input:radio[data-item-id='date']:first").value = todaySlash + " " + TimeVal;

                });
            }
            // .not(':eq(0)')    second
            // :not(:first)      second
            // :not(:first-of-type) doesnt work
            else if ($("input:radio[data-item-id='date']:not(:eq(0))").prop("checked")) {
                $('#today').attr('value', '');
                $('#calendar').attr('value', '');
                $("label[for='calendar']").text('Pick a date');
                for (i = 0; i < allHours; i++) {
                    $('#delivery__time').trigger('remove.owl.carousel', i).trigger('refresh.owl.carousel');
                }
                for (i = 0; i < dayHours; i++) {
                    var tomorrowHours = moment().startOf('day').add(i, 'h').format("HH:mm");
                    $('#delivery__time').trigger('add.owl.carousel', ['<div class="form-check">\n' +
                        '<input class="times__input form-check-input" type="radio" value="' + tomorrowHours +
                        ' " name="tomorrowTimes" data-item-id="todayTimes" id="' + i + '" />' +
                        ' <label class="times__label  form-check-label"  for="' + i + '" >' + tomorrowHours +
                        '</label>\n' +
                        '</div>'
                    ]).trigger('refresh.owl.carousel');
                }
                $(document).on('change', 'input:radio[data-item-id=tomorrowTimes]', function () {
                    var TimeVal = $('input[data-item-id=tomorrowTimes]:checked').val();
                    tomorrowVal.value = tomorrowSlash + " " + TimeVal;
                });
            }
        });


});