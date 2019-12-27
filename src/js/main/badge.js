//  SHOWING BADGE ON HAMBURGER MENU
$(document).ready(function () {
    $(function () { 
        $('.header__toggler').on('click', function () {
          
            if ($(this).attr( 'aria-expanded') === 'true') {
                $(".header__toggler--badge").css( "display", "block" );
            } else {
                $(".header__toggler--badge").css( "display", "none" );
            }
        });
    });
    });