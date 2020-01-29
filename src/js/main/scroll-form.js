// $('.scroll-down').click(function () {



//     $("#first_form").animate({
//         "scrollTop": "+=400px"
//     }, 1500)

// });
// $("#first_form").on("scroll", function () {
//     if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
//         $(".scroll-down").css({
//             'display': 'none'
//         });
//     } else {
//         $(".scroll-down").css({
//             'display': 'block'
//         });
//     }
// });

// $(".index")
//     .mouseenter(function () {
//         $(".scroll-style::-webkit-scrollbar-thumb").css({
//             'visibility: ': 'visible',

//         });
//         $('html ').removeClass('hide-scrollbar');


//     })
//     .mouseleave(function () {
//         $('html ').addClass('hide-scrollbar');
//     });




$(document).ready(function () {
    $(this).mousemove(function () {

        $(".c-scrollbar__bar").css({
            "opacity": "1"
        });
        $(".c-scrollbar__track").css({
            "opacity": "1"
        });


        var onmousestop = function () {
                $(".c-scrollbar__bar").css({
                    "opacity": "0"
                });
                $(".c-scrollbar__track").css({
                    "opacity": "0"
                });
            },
            thread;

        return function () {
        clearTimeout(thread);
        thread = setTimeout(onmousestop, 3000);
        };
    });

    
    $('.scroll-down').click(function () {
        $(".c-scrollbar__hider").animate({
            "scrollTop": "+=400px"
        }, 1500)
    });
    
    
    $(".c-scrollbar__hider").on("scroll", function () {
        $(".c-scrollbar__bar").css({
            "opacity": "1"
        });
        // let a = $(this).offsetTop();
        let scrollTop = $(this).scrollTop();
    
        var scrollbarTrack =$(".c-scrollbar__track").height();
    
        // height: calc(100% * 0.8);
        let scrollingHeight = scrollTop * 50 / 100;
        console.log(scrollbarTrack);
    
        if(scrollingHeight > scrollbarTrack){
         
    
            $(".c-scrollbar__bar").css({
                transform: 'translateY(' + 65 + 'vh)'
            });
        }else{
            $(".c-scrollbar__bar").css({
                transform: 'translateY(' + scrollingHeight + '%)'
            
            });
            
        }
   
    
        if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
            $(".scroll-down").css({
                'display': 'none'
            });
           
        } else {
            $(".scroll-down").css({
                'display': 'block'
            });
        }
    });




     
    $(".c-virtual_list--scrollbar")
        .mouseenter(function () {
            $(".c-scrollbar__bar").css({
                "opacity": "1"
            });
            $(".c-scrollbar__track").css({
                "opacity": "1"
            });
        })
        .mouseleave(function () {
            $(".c-scrollbar__bar").css({
                "opacity": "0"
            });
            $(".c-scrollbar__track").css({
                "opacity": "0"
            });
        });

});