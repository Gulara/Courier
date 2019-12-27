$(document).ready(function(){
    $(".getTocurrentLocation").click(function(){
      $(".inpBtn__box").hide();
      $(".currentLocation").show();
      $(".formBox").removeClass('d-none');
      $(".getStartLatLng").show();
    });
    
    $(".getToEndLocation").click(function(){
      $(".inpBtn__box").hide();
      $(".endLocation").show();
      $(".formBox").removeClass('d-none');
      $(".getEndLatLng").show();
    });

    $(".backToInpBtn__box").click(function(){
        $(".inpBtn__box").show();
        $(".currentLocation").hide();
        $(".endLocation").hide();
        $(".formBox").addClass('d-none');
        $(".getStartLatLng").hide();
    });

    $(".inpBtn__link").click(function(){
        $(".formBox").addClass('d-none');
        $(".mapBox").removeClass('d-none');
      });

    $(".backToFormBox").click(function(){
        $(".mapBox").addClass('d-none');
        $(".formBox").removeClass('d-none');
        $(".currentLocation").show();
        $(".getEndLatLng").hide();
        $(".getStartLatLng").hide();
    });

  
  });

