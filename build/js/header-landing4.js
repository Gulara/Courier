// NEW  FOR LANDING-4.HTML HEADER    
$(document).ready(function () {
$(window).on('scroll', function() {
  
    if( $(".navbar").hasClass("scrolled")){
       
        $('.header__language2 , .header__toggler2, .header__language:after').addClass('header-scroll');
      
    }else{
        $('.header__language2 , .header__toggler2, .dropdown-toggle:after').removeClass('header-scroll');
    }

});
});

