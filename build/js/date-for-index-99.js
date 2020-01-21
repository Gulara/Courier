// FOR INDEX8
$(document).ready(function () {
    // Get the number of days in the current month.
    var daysInMonth = moment().daysInMonth(); // 29
    let response = '';
    for (i = 0; i < daysInMonth; i++) {
        //  GET THE DATE OF TODAY
        var todayDate = moment().add(i, 'd').format("DD");
        //  GET THE WEEKDAY'S NAME OF TODAY
        var todayWeekDayName = moment().add(i, 'd').format("dd");
        var tomorrowMonth = moment().add(i + 1, 'd').format("MMM");

        var tomorrowSlash = moment().add(i, 'days').format('DD/MM/YYYY');
        response = response + '<div class="date__list form-check">\n' +
            '<input class="date__input form-check-input" type="radio" data-slash="' + tomorrowSlash +
            ' "  value="' + tomorrowSlash +
            ' " name="days" data-item-id="date" id="' + i + '"/>' +
            ' <label class="date__label form-check-label "  for="' + i + '" >' +
            // '<span class="date__day">' + todayWeekDayName + '</span>' +
            '<span class="date__date">' + todayDate + '</span>' +
            '<span class="date__month">' + tomorrowMonth + '</span>' +
            '</label>\n' +
            '</div>';


    }
    $('.date').html(response);

    function timesChecked() {
        var checkedSiblings = $("input[data-item-id=times]:checked").parent().nextAll().length;


        var dateChildren = $('.delivery__time').children(':visible').length;


        if (checkedSiblings > 2 && dateChildren > 3) {

            $("input[data-item-id=times]:checked").parent().prevAll().slideUp(300);
            $("input[data-item-id=times]:checked").parent().nextAll(':gt(1)').slideUp(800);
        } else if (checkedSiblings == 2) {
            $("input[data-item-id=times]:checked").parent().prevAll().slideUp(800);

        } else if (checkedSiblings == 1) {
            $("input[data-item-id=times]:checked").parent().prevAll(':gt(0)').slideUp(800);

        } else if (checkedSiblings == 0) {
            $("input[data-item-id=times]:checked").parent().prevAll(':gt(1)').slideUp(800);

        }
    };

    function calendarTimesChecked() {
        var checkedSiblings = $("input[data-item-id=calendar-times]:checked").parent().nextAll().length;


        var dateChildren = $('.delivery__time').children(':visible').length;


        if (checkedSiblings > 2 && dateChildren > 3) {

            $("input[data-item-id=calendar-times]:checked").parent().prevAll().slideUp(300);
            $("input[data-item-id=calendar-times]:checked").parent().nextAll(':gt(1)').slideUp(800);
        } else if (checkedSiblings == 2) {
            $("input[data-item-id=calendar-times]:checked").parent().prevAll().slideUp(800);

        } else if (checkedSiblings == 1) {
            $("input[data-item-id=calendar-times]:checked").parent().prevAll(':gt(0)').slideUp(800);

        } else if (checkedSiblings == 0) {
            $("input[data-item-id=calendar-times]:checked").parent().prevAll(':gt(1)').slideUp(800);

        }
    };

    function dateChecked() {

        var checkedSiblings = $("input[data-item-id=date]:checked").parent().nextAll().length;

        var dateChildren = $('.date').children(':visible').length;
        if (checkedSiblings > 3 && dateChildren > 4) {

            $("input[data-item-id=date]:checked").parent().nextAll(':gt(2)').slideUp(800);
        } else if (checkedSiblings == 3) {
            $("input[data-item-id=date]:checked").parent().prevAll().slideUp(800);

        } else if (checkedSiblings == 2) {
            $("input[data-item-id=date]:checked").parent().prevAll(':gt(0)').slideUp(800);

        } else if (checkedSiblings == 1) {
            $("input[data-item-id=date]:checked").parent().prevAll(':gt(1)').slideUp(800);

        } else if (checkedSiblings == 0) {
            $("input[data-item-id=date]:checked").parent().prevAll(':gt(2)').slideUp(800);
        }
        if ($("input[data-item-id=date]").prop("checked") == false) {
            $(".date__list:nth-child(4)").nextAll().slideUp(800);
        }
    }

    function timesValueSelected() {
        var valueSelected = document.querySelector('input[data-item-id="date"]:checked');
        var TimeVal = $('input[data-item-id=times]:checked').val();
        var dataSlash = $('input[data-item-id=date]:checked').attr('data-slash');



    };

    function calendarValueSelected() {
        var valueSelected = document.querySelector('input[data-item-id="calendar-date"]');
        var TimeVal = $('input[data-item-id=calendar-times]:checked').val();
        var dataSlash = $('input[data-item-id=calendar-date]:checked').attr('data-slash');



    };

    function calendarRemoveText() {
        $("label[for='calendar']").text('Pick a date');
        $("input:radio[data-item-id='calendar-date']").attr('value', '');
        $("input:radio[data-item-id='date']:not(:checked)").attr('value', '');
    };

  

   
    $('input:radio[data-item-id="urgent"]').change(function () {

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
    var allHours = 25;
    var enableHoursToday = allHours - currentHour;

    $('input:radio[data-item-id="date"]').click(function () {
        $("input:radio[data-item-id='calendar-date']").attr('value', '');

        dateChecked();
        // $( "input[data-item-id=date]:checked" ).parent().nextAll().slideUp(800);
        $('.delivery-btn--up').delay(500).queue(function (next) {
            $(this).css({
                'display': 'none'
            });
            next();
        });

        $('.delivery-btn--down').delay(0).queue(function (next) {
            $(this).css({
                'display': 'flex'
            });
            next();
        });

        $('.delivery__form-label').css({
            'display': 'block',
        });
    });

    $(".times__form-check:nth-child(4)").nextAll().slideUp(800);

    $('input:radio[data-item-id="date"]').change(function () {

        $("input:radio[data-item-id='calendar-date']").prop("checked", false);
        $("#calendar").prop("checked", false);
        let radioId = $(this).attr("id");



        //  TODAY TIMES  SIMPLE
        if ($(this).prop("checked") && radioId == '0') {

            let deliveryTimeToday = '';
            calendarRemoveText();

            for (i = 0; i < enableHoursToday; i++) {
                var currentTime = moment().startOf('hour').add(i, 'h').format("HH:mm");
                var currentTimePlusOne = moment().startOf('hour').add(i + 1, 'h').format("HH:mm");
                deliveryTimeToday = deliveryTimeToday + '<div class="form-check times__check-form">\n' +
                    '<input class="times__input" type="radio" value="' + currentTime + "-" + currentTimePlusOne + '" name="times" data-item-id="times" id="' + currentTime + '"/>' +
                    ' <label class="times__label form-check-label "  for="' + currentTime + '" >' + currentTime + "-" + currentTimePlusOne +
                    '</label>\n' +
                    '</div>';
            }

            $('#delivery__time').html(deliveryTimeToday);


            $(document).on('click change', 'input:radio[data-item-id=times]', function () {
                $(".times__btn--down").css({
                    'display': 'flex'
                });
                var valueSelected = document.querySelector('input[data-item-id="date"]:checked');
                var TimeVal = $('input[data-item-id=times]:checked').val();
                var dataSlash = $('input[data-item-id=date]:checked').attr('data-slash');
                $("input:radio[data-item-id='calendar-date']").attr('value', '');
        
                $("input:radio[data-item-id='date']:not(:checked)").attr('value', '');
        
        
        
                timesChecked();
                valueSelected.value = dataSlash + " " + TimeVal;
            });

        }
        // NEXT DAYS TIMES SIMPLE
        else if ($(this).prop("checked") && radioId != '0') {
            let deliveryTimeNext = '';

            calendarRemoveText();

            for (i = 0; i < dayHours; i++) {
                var tomorrowHours = moment().startOf('day').add(i, 'h').format("HH:mm");
                var tomorrowHoursPlusOne = moment().startOf('day').add(i + 1, 'h').format("HH:mm");
                deliveryTimeNext = deliveryTimeNext + '<div class="form-check  times__check-form">\n' +
                    '<input class="times__input" type="radio" value="' + tomorrowHours + "-" + tomorrowHoursPlusOne + '" name="times" data-item-id="times" id="' + tomorrowHours + '" />' +
                    ' <label class="times__label  form-check-label"  for="' + tomorrowHours + '" >' + tomorrowHours + "-" + tomorrowHoursPlusOne +
                    '</label>\n' +
                    '</div>';
            }
            $('#delivery__time').html(deliveryTimeNext);



            $(document).on('click change', 'input:radio[data-item-id=times]', function () {
                $(".times__btn--down").css({
                    'display': 'flex'
                });
                var valueSelected = document.querySelector('input[data-item-id="date"]:checked');
                var TimeVal = $('input[data-item-id=times]:checked').val();
                var dataSlash = $('input[data-item-id=date]:checked').attr('data-slash');
                $("input:radio[data-item-id='calendar-date']").attr('value', '');
        
                $("input:radio[data-item-id='date']:not(:checked)").attr('value', '');
        
        
        
                timesChecked();
                valueSelected.value = dataSlash + " " + TimeVal;

            });

        }

        $(".times__btn--down").css({
            'display': 'none'
        });

        $(".times__btn--down").click(function () {
            $('.times__btn--down').delay(0).queue(function (next) {
                $(this).css({
                    'display': 'none'
                });
                next();
            });


         
            $(".times__check-form:nth-child(2)").nextAll().slideDown(800);
            $("input[data-item-id=times]:checked").parent().prevAll().slideDown(800);
            $(".times__check-form:nth-child(2)").nextAll().slideDown(800);
            $("input[data-item-id=calendar-times]:checked").parent().prevAll().slideDown(800);
        });



    });

    $('input:radio[data-item-id="calendar-date"]').change(function () {
        $("input:radio[data-item-id='date']").prop("checked", false);
        // $("input:radio[data-item-id='calendar-date']").prop( "checked", true);


        let deliveryTimeNext = '';
        $("input:radio[data-item-id='date']:not(:checked)").attr('value', '');

        for (i = 0; i < dayHours; i++) {
            var tomorrowHours = moment().startOf('day').add(i, 'h').format("HH:mm");
            var tomorrowHoursPlusOne = moment().startOf('day').add(i + 1, 'h').format("HH:mm");
            deliveryTimeNext = deliveryTimeNext + '<div class="form-check  times__check-form">\n' +
                '<input class="times__input" type="radio" value="' + tomorrowHours + "-" + tomorrowHoursPlusOne + '" name="times" data-item-id="calendar-times" id="' + tomorrowHours + '" />' +
                ' <label class="times__label  form-check-label"  for="' + tomorrowHours + '" >' + tomorrowHours + "-" + tomorrowHoursPlusOne +
                '</label>\n' +
                '</div>';
        }
        $('#delivery__time').html(deliveryTimeNext);


        $(document).on('click change', 'input:radio[data-item-id=calendar-times]', function () {
            $(".times__btn--down").css({
                'display': 'flex'
            });
    
    
            var valueSelected = document.querySelector('input[data-item-id="calendar-date"]');
            var TimeVal = $('input[data-item-id=calendar-times]:checked').val();
            var dataSlash = $('input[data-item-id=calendar-date]:checked').attr('data-slash');
            $("input:radio[data-item-id='date']:not(:checked)").attr('value', '');
    
            calendarTimesChecked();
            valueSelected.value = dataSlash + " " + TimeVal;

        });

        $(".times__btn--down").css({
            'display': 'none'
        });
        $(".times__btn--down").click(function () {
            $('.times__btn--down').delay(0).queue(function (next) {
                $(this).css({
                    'display': 'none'
                });
                next();
            });



            $(".times__form-check:nth-child(5)").nextAll().slideDown(800);
            $("input[data-item-id=times]:checked").parent().prevAll().slideDown(800);
            // $(".times__form-check:nth-child(5)").nextAll().slideDown(800);
            $("input[data-item-id=calendar-times]:checked").parent().prevAll().slideDown(800);
        });
    });

    $(".date__list:nth-child(4)").nextAll().slideUp(800);

    $(".delivery-btn--down").click(function () {

        $('.delivery-btn--down').delay(0).queue(function (next) {
            $(this).css({
                'display': 'none'
            });
            next();
        });



        $('.delivery-btn--up').delay(0).queue(function (next) {
            $(this).css({
                'display': 'flex',
                'position': 'inherit',
                'width': '80%',
                'top': '10px'
            });
            next();
        });

        $(".date__list").slideDown(800);
        $("input[data-item-id=date]:checked").parent().prevAll().slideDown(200);
        $('.form__label--time').css({

            'margin-top': '20px',

        });
    });



    $(".times__btn--down").click(function () {
        $('.times__btn--down').delay(0).queue(function (next) {
            $(this).css({
                'display': 'none'
            });
            next();
        });


       
        $(".times__check-form:nth-child(2)").nextAll().slideDown(800);
        $("input[data-item-id=times]:checked").parent().prevAll().slideDown(800);
        $(".times__check-form:nth-child(2)").nextAll().slideDown(800);
        $("input[data-item-id=calendar-times]:checked").parent().prevAll().slideDown(800);
       
    });
    $(".delivery-btn--up").click(function () {
        $('#calendar').prop("checked");

        $("#first_form").animate({
            "scrollTop": "1200px"
        }, 100)

        $('.delivery-btn--down').css({
            'position': 'absolute',
            'right': '0',
            'margin-top': '10px',
        });
        $('.date').css({
            'position': 'relative',

        });
        $('.times').css({
            'margin-top': '10px',

        });
        $('.form__label--time').css({
            'display': 'block',
            'margin-top': '85px',

        });


        $('.delivery-btn--up').delay(0).queue(function (next) {
            $(this).css({
                'display': 'block',
                'position': 'absolute',
                'top': '43px',
                'width': '80%'
            });
            next();
        });


        $('.delivery-btn--down').delay(0).queue(function (next) {
            $(this).css({
                'display': 'flex'
            });
            next();
        });

        if (!$("input[data-item-id=date]").is(':checked')) {
            $(".date__list").slideUp(800);
        }

        // else if($("input[data-item-id=date]").prop("checked") == true){
        //     $(".date__list:nth-child(4)").nextAll().slideDown(800);
        // }


        dateChecked();
    });
});