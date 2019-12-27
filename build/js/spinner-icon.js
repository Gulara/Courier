// FOR INDEX7

// İNDEXDƏ OLAN FORMUN İÇİNDƏKİ #LABOR  SPINNERIN İCONUNUN DƏYİŞMƏSİ
$(document).ready(function () {
function spinnerAction(count) {
    if(count == 0) {
        $("#user0").removeClass("d-none");
        $("#user1").addClass("d-none");
        $("#user2").addClass("d-none");
        $("#userMore").addClass("d-none");
    }
    else if (count == 1) {
        $("#user0").addClass("d-none");
        $("#user1").removeClass("d-none");
        $("#user2").addClass("d-none");
        $("#userMore").addClass("d-none");
    } else if (count == 2) {
        $("#user0").addClass("d-none");
        $("#user1").addClass("d-none");
        $("#user2").removeClass("d-none");
        $("#userMore").addClass("d-none");
    } else if (count >= 3) {
        $("#user0").addClass("d-none");
        $("#user1").addClass("d-none");
        $("#user2").addClass("d-none");
        $("#userMore").removeClass("d-none");
    }
}

var count = 0;

$("#spinner").on("keyup",function (e) {
    count = $(this).val();
    spinnerAction(count);
});

$("#icon-minus").on("click", function (e) {
    if (count != 0) {
        count = count - 1;
    }
    $("#spinner").val(count);
    spinnerAction(count);
});

$("#icon-plus").on("click", function (e) {
        count = count + 1;
    $("#spinner").val(count);
    spinnerAction(count);
});
});