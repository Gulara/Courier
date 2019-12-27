// FOR INDEX7
//  SWIPE TRANSITION START
$(document).ready(function () {
    
    $(function () {

        function setCurrentSlide(ele, index, cssClass) {
            $(cssClass + " .swiper-slide").removeClass("active");
            $(cssClass + " .swiper-slide").attr("aria-selected", "false");
            ele.addClass("active");
            ele.attr("aria-selected", "true");



            var z = $('#car-tab-courier').attr("aria-selected");
            if (z == "true") {

                var insuranceInputVal = $(".insurance__div--input").val();
                insuranceInputVal = $(".insurance__div--input").val('');
                var InsurancePercent = $(".insurance__percent").text('0');
                totalPrice = $('.total__money').text(parseInt($(".price").text()));
                $(".insurance__input").prop("checked", false);
              
            }

            var x = $("#car-tab-truck").attr("aria-selected");
            if (x == "true") {
                $('#labor, #packing').css({
                    'display': 'block'
                });
                var insuranceInputVal = $(".insurance__div--input").val();
                insuranceInputVal = $(".insurance__div--input").val('');
                var InsurancePercent = $(".insurance__percent").text('0');
                totalPrice = $('.total__money').text(parseInt($(".price").text()));
                $(".insurance__input").prop("checked", false);
             
            } else {
                $('#labor, #packing').css({
                    'display': 'none'
                });
            }

            var y = $("#car-tab-evacutor").attr("aria-selected");
            if (y == "false") {
                $('#receiver').css({
                    'display': 'block'
                });
            } else {
                $('#receiver').css({
                    'display': 'none'
                });
                var insuranceInputVal = $(".insurance__div--input").val();
                insuranceInputVal = $(".insurance__div--input").val('');
                var InsurancePercent = $(".insurance__percent").text('0');
                totalPrice = $('.total__money').text(parseInt($(".price").text()));
                $(".insurance__input").prop("checked", false);
              
            }

            // SWIPE EDENDE TEK OLAN CAR INPUTUNU SECSIN

            var numItems = $('.swiper-slide-active').find(".car-pills__input").length;

            if (numItems == 1) {
                $(".swiper-slide-active").find(".car-pills__input").prop("checked", true);
            } else {
                $(".swiper-slide").find(".car-pills__input").prop("checked", false);
                $(".swiper-slide-active").find("#pedestrian").prop("checked", true);
            }

        }

        //check for anchor
        var locationHash = document.location.hash;

        //Open Tab to location hash
        if ($(locationHash).length) {
            console.log("exists");
        } else {
            console.log("no hash");
        }



        //find each component
        $('.tabcontainer').each(function (i) {

            //add unique id to tab container
            $(this).attr('id', 'tabcontainer-' + i);
            //cache unique id
            var el = '#tabcontainer-' + i;
            //add unique class to the tab list
            $(this).find('.swiper-tabs').addClass('navinstance-' + i);
            $(this).find('.swiper-tabs-panel').addClass('panelinstance-' + i);
            var tabNavClass = '.navinstance-' + i;
            var tabPnlClass = '.panelinstance-' + i;

            var mqls = [ // list of window.matchMedia() queries
                window.matchMedia("(max-width: 480px)"),
                window.matchMedia("(max-width: 979px)")
            ]

          







            //swiper stuff
            var swiper1 = new Swiper(tabNavClass, {
                slidesPerView: 3,
                paginationClickable: true,
                hashNavigation: true,
                spaceBetween: 1,
                freeMode: true,
                loop: false,
                noSwiping: true,
                noSwipingClass: 'swiper-no-swiping',
                observer: true,
                preventClicksPropagation: true,
                onTab: function (swiper) {
                    var n = swiper1.clickedIndex;
                    alert(1);
                },
                // breakpoints: {
                //     // when window width is <= 480px
                //     480: {
                //         slidesPerView: 3
                //     },
                //     // when window width is <= 980px
                //     980: {
                //         slidesPerView: 3
                //     }
                // }
            });
            swiper1.slides.each(function (index, val) {
                var ele = $(this);
                ele.on("click", function () {
                    setCurrentSlide(ele, index, tabNavClass);
                    swiper2.slideTo(index, 500, false);
                });


            });

            var swiper2 = new Swiper(tabPnlClass, {
                direction: 'horizontal',
                loop: false,
                autoHeight: true,
                observer: true,
                preventClicks: false,
                onSlideChangeEnd: function (swiper) {
                    var n = swiper.activeIndex;
                    setCurrentSlide($(tabNavClass + " .swiper-slide").eq(n), n,
                        tabNavClass);
                    swiper1.slideTo(n, 500, false);
                },
                // breakpoints: {
                //     // when window width is <= 480px
                //     480: {
                //         direction: 'vertical',
                //         noSwiping: true,
                //         noSwipingClass: 'swiper-no-swiping'
                //     }
                // }
            });

            if (locationHash) {
                swiper2.slideTo(swiper1.activeIndex);
            }

            function mediaqueryresponse(mql) {
                if (mqls[0].matches) {
                    //Mobile Mode
                    $('.swiper-container').addClass('swiper-no-swiping');
                    $('.swiper-wrapper').addClass('swiper-no-swiping');
                    $('.swiper-slide').addClass('swiper-no-swiping');
                } else if (mqls[1].matches) {
                    //Tablet Mode
                    $('.swiper-container').removeClass('swiper-no-swiping');
                    $('.swiper-wrapper').removeClass('swiper-no-swiping');
                    $('.swiper-slide').removeClass('swiper-no-swiping');
                } else {
                    //Desktop
                }
            }


            for (var i = 0; i < mqls.length; i++) {
                mediaqueryresponse(mqls[i]);
                mqls[i].addListener(
                    mediaqueryresponse); // call handler function whenever the media query is triggered
            }
        });
    });


    // CLICK EDENDE TEK OLAN CAR INPUTUNU SECSIN

    $(document).ready(function () {
        $('#car-tab-courier').click(function () {
            $("#evacuator").prop("checked", false);
            $("#truck").prop("checked", false);
            $(".swiper-slide-active").find("#pedestrian").prop("checked", true);
            $("#pedestrian").trigger("change");
            // $('input:radio[data-id=transition]:nth(0)').prop('checked', true).trigger("change");
            // setTimeout(function(){
            //     $("#pedestrian").prop('checked','checked');
            //   },10);

            // let who = $('input:radio[data-id=transition]:nth(0)').prop('id').trigger("change") ;
            // let checked = $(this).prop('checked') ? 'checked' : 'unchecked';
            // console.log(who + ' has been ' + checked);

         
        });
        $('#car-tab-evacutor').click(function () {
            $("#evacuator").prop("checked", true);
        });

        $('#car-tab-truck').click(function () {
            $("#truck").prop("checked", true);
        });

    });
});

//  SWIPE TRANSITION END