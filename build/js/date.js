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

    // Get the number of days in the current month.
    var daysInMonth = moment().daysInMonth(); // 29

    let response = '';
    for (i = 0; i < daysInMonth; i++) {
        console.log(i);
        //  GET THE DATE OF TODAY
        var todayDate = moment().add(i + 1, 'd').format("DD");
        //  GET THE WEEKDAY'S NAME OF TODAY
        var todayWeekDayName = moment().add(i + 1, 'd').format("dd")
        var currentWeekday = moment().add(i + 1, 'd').format("dd");
        var tomorrowMonth = moment().add(i + 1, 'd').format("MMMM");
        response = response + '<div class="date__list form-check">\n' +
            '<input class="date__input form-check-input" type="radio" value="' + todayDate +
            ' " name="todayTimes" data-item-id="' + todayDate + ' " id="' + i + '"/>' +
            ' <label class="date__label form-check-label "  for="' + i + '" >' +
            '<span class="date__day">' + todayWeekDayName + '</span>' +
            '<span class="date__date">' + todayDate + '</span>' +
            '</label>\n' +
            '</div>';
    }
    $('.date').html(response);


    $('input:radio[data-item-id="urgent"]').change(

        function () {

            if ($(this).is(':checked') && $(this).val() == 'non-urgent') {
                // FOR INDEX8HTML
                $('.date').css({
                    'display': 'flex'
                });

            } else if ($(this).is(':checked') && $(this).val() == 'urgent') {
                // FOR INDEX 8
                $('.date').css({
                    'display': 'none'
                });



            }
        });





});