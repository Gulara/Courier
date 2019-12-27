// FOR INDEX
//  MOMENT JS START

$(document).ready(function () {
    var dayHours = 24;
    var allHours = 24;
    var currentTime = moment().startOf('hour').add(1, 'h').format("HH:mm");
    var currentHour = moment().startOf('hour').add(1, 'h').format("HH");
    var enableHoursToday = dayHours - currentHour;
    var today = moment().locale("az").format("DD MMMM");
    var tomorrow = moment().add(1, 'days').format("DD MMMM");

    var todaySlash = moment().format('DD/MM/YYYY');
    var tomorrowSlash = moment().add(1, 'days').format('DD/MM/YYYY');

    var todayVal = document.getElementById("today");
    var tomorrowVal = document.getElementById("tomorrow");
    var calendarVal = document.getElementById("calendar");


    //  BUGÜN VƏ SABAHIN TARİXİNİN İNPUT NAME=DAY-DƏ GÖRSƏNMƏSİ
    $('#today-span').html(today);
    $('#tomorrow-span').html(tomorrow);

    var text = "";
    $(document).on('change', 'input:radio[data-item-id="day"]', function () {

        if ($(".today").prop("checked")) {
            $('#tomorrow').attr('value', '');
            $('#calendar').attr('value', '');
            $("label[for='calendar']").text('Pick a date');
            for (i = 0; i < allHours; i++) {
                $('#delivery__time').trigger('remove.owl.carousel', i).trigger('refresh.owl.carousel');
            }
            for (i = 0; i < enableHoursToday; i++) {
                var currentTime = moment().startOf('hour').add(i + 2, 'h').format("HH:mm");
                $('#delivery__time').trigger('add.owl.carousel', ['<div class="form-check">\n' +
                    '<input class="times__input form-check-input" type="radio" value="' + currentTime +
                    ' " name="todayTimes" data-item-id="todayTimes" id="' + i + '"/>' +
                    ' <label class="times__label  form-check-label"  for="' + i + '" >' + currentTime +
                    '</label>\n' +
                    '</div>'
                ]).trigger('refresh.owl.carousel');
            }

            $(document).on('change', 'input:radio[data-item-id=todayTimes]', function () {
                var TimeVal = $('input[data-item-id=todayTimes]:checked').val();
                todayVal.value = todaySlash + " " + TimeVal;

            });
        } else if ($(".tomorrow").prop("checked")) {
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
                    ' " name="tomorrowTimes" data-item-id="tomorrowTimes" id="' + i + '" />' +
                    ' <label class="times__label  form-check-label"  for="' + i + '" >' + tomorrowHours +
                    '</label>\n' +
                    '</div>'
                ]).trigger('refresh.owl.carousel');
            }
            $(document).on('change', 'input:radio[data-item-id=tomorrowTimes]', function () {
                var TimeVal = $('input[data-item-id=tomorrowTimes]:checked').val();
                tomorrowVal.value = tomorrowSlash + " " + TimeVal;
            });
        } else if ($(".calendar-input").prop("checked")) {
            $('#tomorrow').attr('value', '');
            $('#today').attr('value', '');

            for (i = 0; i < dayHours; i++) {
                $('#delivery__time').trigger('remove.owl.carousel', i).trigger('refresh.owl.carousel');
            }

            for (i = 0; i < allHours; i++) {
                var calendarHours = moment().startOf('day').add(i, 'h').format("HH:mm");
                $('#delivery__time').trigger('add.owl.carousel', ['<div class="form-check">\n' +
                    '<input class="times__input form-check-input" type="radio" value="' + calendarHours +
                    '" name="calendarTimes" data-item-id="calendarTimes" id="' + i + '" />' +
                    ' <label class="times__label  form-check-label"  for="' + i + '" >' + calendarHours +
                    '</label>\n' +
                    '</div>'
                ]).trigger('refresh.owl.carousel');
            }

            $(document).on('change', 'input:radio[data-item-id=calendarTimes]', function () {
                var calendarLabel = $(".calendar-label").text();
                var TimeVal = $('input[data-item-id=calendarTimes]:checked').val();

                calendarVal.value = calendarLabel + " " + TimeVal;
            });
        }
    });
});

// MOMENT JS END