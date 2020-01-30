// // DELIVERY DATE JS START
//  SHOW AND HIDE #DELIVERY DATE WHEN CLICKED SHEDULED(NON-URGENT)
$(document).ready(function () {
  $("#non-urgent-tab").prop("checked", true);

  $('input:radio[data-item-id="urgent"]').change(

    function () {

      if ($(this).is(':checked') && $(this).val() == 'non-urgent') {
        //  SHOWING DELIVERY DATE
        $('#delivery').css({
          'display': 'block'
        });

        // $('.wave-left').addClass('wave-down-left');
        // $('.wave-right').addClass('wave-up-left');
        // $('.wave-down-left').delay(1000).queue(function (next) {
        //   $('.wave-left').removeClass('wave-down-left');
        //   next();
        // });
        // $('.wave-up-left').delay(1000).queue(function (next) {
        //   $('.wave-right').removeClass('wave-up-left');
        //   next();
        // });


      } else if ($(this).is(':checked') && $(this).val() == 'urgent') {
        // HIDING DELIVERY DATE
        $('#delivery').css({
          'display': 'none'
        });

        // $('.wave-left').addClass('wave-up-right');
        // $('.wave-right').addClass('wave-down-right');
        // $('.wave-up-right').delay(1000).queue(function (next) {
        //   $('.wave-left').removeClass('wave-up-right');
        //   next();
        // });
        // $('.wave-down-right').delay(1000).queue(function (next) {
        //   $('.wave-right').removeClass('wave-down-right');
        //   next();
        // });
      }
    });



  // LOCAL STORAGE FOR INPUT RADIO 

  $(function () {
    $('input:radio[data-item-id="urgent"]').each(function () {
      var state = JSON.parse(localStorage.getItem('radio_' + $(this).attr('id')));

      if (state) this.checked = state.checked;
      if ($(this).is(':checked') && $(this).val() == 'non-urgent') {
        $('#delivery').css({
          'display': 'block'
        });

      } else if ($(this).is(':checked') && $(this).val() == 'urgent') {
        $('#delivery').css({
          'display': 'none'
        });
      }
    });
  });

  $(window).bind('unload', function () {
    $('input:radio[data-item-id="urgent"]').each(function () {
      localStorage.setItem('radio_' + $(this).attr('id'), JSON.stringify({
        checked: this.checked
      }));
    });
  });
});

// // DELIVERY DATE JS END