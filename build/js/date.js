// FOR INDEX8
$(document).ready(function () {
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
        var tomorrowMonth = moment().add(i + 1, 'd').format("MMM");

        var tomorrowSlash = moment().add(i, 'days').format('DD/MM/YYYY');
        response = response + '<div class="date__list form-check">\n' +
            '<input class="date__input form-check-input" type="radio" data-slash="' + tomorrowSlash +
            ' "  value="' + tomorrowSlash +
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

    $('input:radio[data-item-id="date"]').click(
        function () {

            /////////////////////////
            var checkedSiblings = $("input[data-item-id=date]:checked").parent().nextAll().length;

            var dateChildren = $('.date').children(':visible').length;
            // console.log(dateChildren);


            if (checkedSiblings > 3 && dateChildren > 4) {

                $("input[data-item-id=date]:checked").parent().prevAll().slideUp(800);
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
        });

    $(".times__form-check:nth-child(4)").nextAll().slideUp(800);


    $('input:radio[data-item-id="date"]').change(
        function () {


            let radioId = $(this).attr("id");

    

            //  TODAY TIMES  SIMPLE
            if ($(this).prop("checked") && radioId == '0') {

                let deliveryTimeToday = '';

                $("input:radio[data-item-id='date']:not(:checked)").attr('value', '');
                $("label[for='calendar']").text('Pick a date');

                for (i = 0; i < enableHoursToday; i++) {
                    var currentTime = moment().startOf('hour').add(i + 2, 'h').format("HH:mm");
                    deliveryTimeToday = deliveryTimeToday + '<div class="form-check times__form-check">\n' +
                        '<input class="times__input" type="radio" value="' + currentTime + '" name="times" data-item-id="times" id="' + currentTime + '"/>' +
                        ' <label class="times__label form-check-label "  for="' + currentTime + '" >' + currentTime +
                        '</label>\n' +
                        '</div>';
                }

                $('#delivery__time').html(deliveryTimeToday);


                $(document).on('click', 'input:radio[data-item-id=times]', function () {
                    $(".times__btn--down").css({
                        'display': 'flex'
                    });


                    var checkedSiblings = $("input[data-item-id=times]:checked").parent().nextAll().length;
                  

                    var dateChildren = $('.delivery__time').children(':visible').length;
                    // console.log(dateChildren);

                    if (checkedSiblings > 4 && dateChildren > 5) {

                        $("input[data-item-id=times]:checked").parent().prevAll().slideUp(300);
                        $("input[data-item-id=times]:checked").parent().nextAll(':gt(3)').slideUp(800);
                    } else if (checkedSiblings == 4) {
                        $("input[data-item-id=times]:checked").parent().prevAll().slideUp(800);

                    } else if (checkedSiblings == 3) {
                        $("input[data-item-id=times]:checked").parent().prevAll(':gt(0)').slideUp(800);

                    } else if (checkedSiblings == 2) {
                        $("input[data-item-id=times]:checked").parent().prevAll(':gt(1)').slideUp(800);

                    } else if (checkedSiblings == 1) {
                        $("input[data-item-id=times]:checked").parent().prevAll(':gt(2)').slideUp(800);

                    } else if (checkedSiblings == 0) {
                        $("input[data-item-id=times]:checked").parent().prevAll(':gt(3)').slideUp(800);

                    }
                });
                //  here
                $(document).on('change', 'input:radio[data-item-id=times]', function () {
                    var TimeVal = $('input[data-item-id=times]:checked').val();
                    var valueSelected = document.querySelector('input[data-item-id="date"]:checked');
                    var TimeVal = $('input[data-item-id=times]:checked').val();
                    var dataSlash = $('input[data-item-id=date]:checked').attr('data-slash');


                    valueSelected.value = dataSlash + " " + TimeVal;

                    $("input:radio[data-item-id='date']:not(:checked)").attr('value', '');



                    $(".times__btn--down").css({
                        'display': 'flex'
                    });


                    var checkedSiblings = $("input[data-item-id=times]:checked").parent().nextAll().length;
                    

                    var dateChildren = $('.delivery__time').children(':visible').length;
                    // console.log(dateChildren);

                    if (checkedSiblings > 4 && dateChildren > 5) {

                        $("input[data-item-id=times]:checked").parent().prevAll().slideUp(300);
                        $("input[data-item-id=times]:checked").parent().nextAll(':gt(3)').slideUp(800);
                    } else if (checkedSiblings == 4) {
                        $("input[data-item-id=times]:checked").parent().prevAll().slideUp(800);

                    } else if (checkedSiblings == 3) {
                        $("input[data-item-id=times]:checked").parent().prevAll(':gt(0)').slideUp(800);

                    } else if (checkedSiblings == 2) {
                        $("input[data-item-id=times]:checked").parent().prevAll(':gt(1)').slideUp(800);

                    } else if (checkedSiblings == 1) {
                        $("input[data-item-id=times]:checked").parent().prevAll(':gt(2)').slideUp(800);

                    } else if (checkedSiblings == 0) {
                        $("input[data-item-id=times]:checked").parent().prevAll(':gt(3)').slideUp(800);

                    }


                });

            }
            // NEXT DAYS TIMES SIMPLE
            else if ($(this).prop("checked") && radioId != '0') {
                let deliveryTimeNext = '';
                $("label[for='calendar']").text('Pick a date');
                $("input:radio[data-item-id='date']:not(:checked)").attr('value', '');

                for (i = 0; i < dayHours; i++) {
                    var tomorrowHours = moment().startOf('day').add(i, 'h').format("HH:mm");
                    deliveryTimeNext = deliveryTimeNext + '<div class="form-check  times__form-check">\n' +
                        '<input class="times__input" type="radio" value="' + tomorrowHours + '" name="times" data-item-id="times" id="' + tomorrowHours + '" />' +
                        ' <label class="times__label  form-check-label"  for="' + tomorrowHours + '" >' + tomorrowHours +
                        '</label>\n' +
                        '</div>';
                }
                $('#delivery__time').html(deliveryTimeNext);

                $(document).on('click', 'input:radio[data-item-id=times]', function () {
                    $(".times__btn--down").css({
                        'display': 'flex'
                    });
                    $(".times__btn--up").css({
                        'display': 'none'
                    });

                    var checkedSiblings = $("input[data-item-id=times]:checked").parent().nextAll().length;
                 

                    var dateChildren = $('.delivery__time').children(':visible').length;
                    // console.log(dateChildren);

                    if (checkedSiblings > 4 && dateChildren > 5) {

                        $("input[data-item-id=times]:checked").parent().prevAll().slideUp(300);
                        $("input[data-item-id=times]:checked").parent().nextAll(':gt(3)').slideUp(800);
                    } else if (checkedSiblings == 4) {
                        $("input[data-item-id=times]:checked").parent().prevAll().slideUp(800);

                    } else if (checkedSiblings == 3) {
                        $("input[data-item-id=times]:checked").parent().prevAll(':gt(0)').slideUp(800);

                    } else if (checkedSiblings == 2) {
                        $("input[data-item-id=times]:checked").parent().prevAll(':gt(1)').slideUp(800);

                    } else if (checkedSiblings == 1) {
                        $("input[data-item-id=times]:checked").parent().prevAll(':gt(2)').slideUp(800);

                    } else if (checkedSiblings == 0) {
                        $("input[data-item-id=times]:checked").parent().prevAll(':gt(3)').slideUp(800);

                    }
                });
                $(document).on('change', 'input:radio[data-item-id=times]', function () {
                    var TimeVal = $('input[data-item-id=times]:checked').val();
                    var valueSelected = document.querySelector('input[data-item-id="date"]:checked');
                    var TimeVal = $('input[data-item-id=times]:checked').val();
                    var dataSlash = $('input[data-item-id=date]:checked').attr('data-slash');


                    valueSelected.value = dataSlash + " " + TimeVal;

                    $("input:radio[data-item-id='date']:not(:checked)").attr('value', '');
                    $(".times__btn--down").css({
                        'display': 'flex'
                    });
                    $(".times__btn--up").css({
                        'display': 'none'
                    });

                    var checkedSiblings = $("input[data-item-id=times]:checked").parent().nextAll().length;
                  

                    var dateChildren = $('.delivery__time').children(':visible').length;
                   

                    if (checkedSiblings > 4 && dateChildren > 5) {

                        $("input[data-item-id=times]:checked").parent().prevAll().slideUp(300);
                        $("input[data-item-id=times]:checked").parent().nextAll(':gt(3)').slideUp(800);
                    } else if (checkedSiblings == 4) {
                        $("input[data-item-id=times]:checked").parent().prevAll().slideUp(800);

                    } else if (checkedSiblings == 3) {
                        $("input[data-item-id=times]:checked").parent().prevAll(':gt(0)').slideUp(800);

                    } else if (checkedSiblings == 2) {
                        $("input[data-item-id=times]:checked").parent().prevAll(':gt(1)').slideUp(800);

                    } else if (checkedSiblings == 1) {
                        $("input[data-item-id=times]:checked").parent().prevAll(':gt(2)').slideUp(800);

                    } else if (checkedSiblings == 0) {
                        $("input[data-item-id=times]:checked").parent().prevAll(':gt(3)').slideUp(800);

                    }
                });

            }
            else if ($('#calendar').prop("checked")) {
                let deliveryTimeNext = '';
                $("input:radio[data-item-id='date']:not(:checked)").attr('value', '');

                for (i = 0; i < dayHours; i++) {
                    var tomorrowHours = moment().startOf('day').add(i, 'h').format("HH:mm");
                    deliveryTimeNext = deliveryTimeNext + '<div class="form-check  times__form-check">\n' +
                        '<input class="times__input" type="radio" value="' + tomorrowHours + '" name="times" data-item-id="times" id="' + tomorrowHours + '" />' +
                        ' <label class="times__label  form-check-label"  for="' + tomorrowHours + '" >' + tomorrowHours +
                        '</label>\n' +
                        '</div>';
                }
                $('#delivery__time').html(deliveryTimeNext);
                $(document).on('click', 'input:radio[data-item-id=times]', function () {
                    $(".times__btn--down").css({
                        'display': 'flex'
                    });
                    $(".times__btn--up").css({
                        'display': 'none'
                    });

                    var checkedSiblings = $("input[data-item-id=times]:checked").parent().nextAll().length;
            

                    var dateChildren = $('.delivery__time').children(':visible').length;
                  

                    if (checkedSiblings > 4 && dateChildren > 5) {

                        $("input[data-item-id=times]:checked").parent().prevAll().slideUp(300);
                        $("input[data-item-id=times]:checked").parent().nextAll(':gt(3)').slideUp(800);
                    } else if (checkedSiblings == 4) {
                        $("input[data-item-id=times]:checked").parent().prevAll().slideUp(800);

                    } else if (checkedSiblings == 3) {
                        $("input[data-item-id=times]:checked").parent().prevAll(':gt(0)').slideUp(800);

                    } else if (checkedSiblings == 2) {
                        $("input[data-item-id=times]:checked").parent().prevAll(':gt(1)').slideUp(800);

                    } else if (checkedSiblings == 1) {
                        $("input[data-item-id=times]:checked").parent().prevAll(':gt(2)').slideUp(800);

                    } else if (checkedSiblings == 0) {
                        $("input[data-item-id=times]:checked").parent().prevAll(':gt(3)').slideUp(800);

                    }
                });
                let calendarLabel = $(".calendar-label").text();
                console.log(calendarLabel);
                $(document).on('change', 'input:radio[data-item-id=times]', function () {
                    var TimeVal = $('input[data-item-id=times]:checked').val();
                    var valueSelected = document.querySelector('input[data-item-id="date"]:checked');
                    var TimeVal = $('input[data-item-id=times]:checked').val();
                    var dataSlash = $('input[data-item-id=date]:checked').attr('data-slash');


                    valueSelected.value = dataSlash + " " + TimeVal;

                   
                    // valueSelected.value = calendarLabel + " " + TimeVal;

                    $("input:radio[data-item-id='date']:not(:checked)").attr('value', '');
                    $(".times__btn--down").css({
                        'display': 'flex'
                    });
                    $(".times__btn--up").css({
                        'display': 'none'
                    });

                    var checkedSiblings = $("input[data-item-id=times]:checked").parent().nextAll().length;
                   

                    var dateChildren = $('.delivery__time').children(':visible').length;
                    // console.log(dateChildren);

                    if (checkedSiblings > 4 && dateChildren > 5) {

                        $("input[data-item-id=times]:checked").parent().prevAll().slideUp(300);
                        $("input[data-item-id=times]:checked").parent().nextAll(':gt(3)').slideUp(800);
                    } else if (checkedSiblings == 4) {
                        $("input[data-item-id=times]:checked").parent().prevAll().slideUp(800);

                    } else if (checkedSiblings == 3) {
                        $("input[data-item-id=times]:checked").parent().prevAll(':gt(0)').slideUp(800);

                    } else if (checkedSiblings == 2) {
                        $("input[data-item-id=times]:checked").parent().prevAll(':gt(1)').slideUp(800);

                    } else if (checkedSiblings == 1) {
                        $("input[data-item-id=times]:checked").parent().prevAll(':gt(2)').slideUp(800);

                    } else if (checkedSiblings == 0) {
                        $("input[data-item-id=times]:checked").parent().prevAll(':gt(3)').slideUp(800);

                    }
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

                $('.times__btn--up').delay(500).queue(function (next) {
                    $(this).css({
                        'display': 'flex'
                    });
                    next();
                });

                $(".times__form-check:nth-child(5)").nextAll().slideDown(800);
                $("input[data-item-id=times]:checked").parent().prevAll().slideDown(800);
            });


            $(".times__btn--up").click(function () {
                $('.times__btn--up').delay(0).queue(function (next) {
                    $(this).css({
                        'display': 'none'
                    });
                    next();
                });

                $('.times__btn--down').delay(0).queue(function (next) {
                    $(this).css({
                        'display': 'flex'
                    });
                    next();
                });

                // $(".times__form-check:nth-child(5)").nextAll().slideUp(500);


                var checkedSiblings = $("input[data-item-id=times]:checked").parent().nextAll().length;
              

                var dateChildren = $('.delivery__time').children(':visible').length;
                // console.log(dateChildren);
                if ($("input[data-item-id=times]").prop("checked") == false) {
                    $(".times__form-check:nth-child(5)").nextAll().slideUp(800);
                }


                if (checkedSiblings > 4 && dateChildren > 5) {

                    $("input[data-item-id=times]:checked").parent().prevAll().slideUp(300);
                    $("input[data-item-id=times]:checked").parent().nextAll(':gt(3)').slideUp(800);
                } else if (checkedSiblings == 4) {
                    $("input[data-item-id=times]:checked").parent().prevAll().slideUp(800);

                } else if (checkedSiblings == 3) {
                    $("input[data-item-id=times]:checked").parent().prevAll(':gt(0)').slideUp(800);

                } else if (checkedSiblings == 2) {
                    $("input[data-item-id=times]:checked").parent().prevAll(':gt(1)').slideUp(800);

                } else if (checkedSiblings == 1) {
                    $("input[data-item-id=times]:checked").parent().prevAll(':gt(2)').slideUp(800);

                } else if (checkedSiblings == 0) {
                    $("input[data-item-id=times]:checked").parent().prevAll(':gt(3)').slideUp(800);

                }

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
                'position': 'static',
                'width': '80%'
            });
            next();
        });

        $(".date__list:nth-child(4)").nextAll().slideDown(800);
        $("input[data-item-id=date]:checked").parent().prevAll().slideDown(800);
        $('.form__label--time').css({
       
            'margin-top': '20px',
            
        });
    });




    $(".delivery-btn--up").click(function () {
       
        $('.delivery-btn--down').css({
            'position': 'absolute',
            'right': '0'  ,
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
                'top': '10px',
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


        var checkedSiblings = $("input[data-item-id=date]:checked").parent().nextAll().length;

        var dateChildren = $('.date').children(':visible').length;
        // console.log(dateChildren);

        if (!$("input[data-item-id=date]").is(':checked')) {
            $(".date__list").slideUp(800);
        }


        var checkedFalse = $("input[data-item-id=date]").prop("checked");


        // else if($("input[data-item-id=date]").prop("checked") == true){
        //     $(".date__list:nth-child(4)").nextAll().slideDown(800);
        // }

        if (checkedSiblings > 3 && dateChildren > 4) {

            // $("input[data-item-id=date]:checked").parent().prevAll().slideUp(800);
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
    });



});