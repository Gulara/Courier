$(document).ready(function () {
    
      
    

      $("#phoneNumber").click(function (e) {

        console.log($(this).parentsUntil(".form-group__phone-div").find('add-wp'));

        $(".add-wp").parentsUntil(".form-group__phone").slideDown()
    });
    $(".add-wp").click(function (e) {
        e.preventDefault();
        $(".check-wp").css({
            "display": "flex"
        });
        $(".check-wp__input").prop("checked", true);
        $("#phoneNumber").addClass('form__phone--input');

        if ($(".check-wp__input").prop("checked") == false) {
            $(".add-wp").slideDown();
            $(".check-wp").css({
                "display": "none"
            });
            $("#phoneNumber").removeClass('form__phone--input');
        } else {
            $(".add-wp").slideUp();
        }
    })

    $('.check-wp__input[type="checkbox"]').click(function () {
        if ($(this).prop("checked") == false) {
            $(".check-wp").css({
                "display": "none"
            });
            $("#phoneNumber").removeClass('form__phone--input');
        } else {
            $(this).slideUp();
        }
    });

});


// Add row
var row = 1;
max = 2;

var remaining = 2;

function UpdateRemaining(isAdd) {
    if (isAdd) {
        remaining = remaining - 1;
    } else {
        remaining = remaining + 1;
    }

    $('#remaining').text(remaining);
    if (remaining == 0) {
        $('.add-phone').prop("disabled", true);
    } else {
        $('.add-phone').prop("disabled", false);
    }
}
$(document).on("click", ".add-phone", function () {
    var new_row = '<div class="form-group__phone" id="row' + row + '">' +
        '<div class="valid-check valid-hide ">&#10004;</div>' +
        '  <span id="error-receiver-number " ></span>' +
        '<span id="error-msg" class="valid-hide text-danger d-block"></span>' +
        '  <div class="form__phone-group">' +
        ' <input type="text" class="form-control form__control form__phone-' + row + '" id="phoneNumber">' +
        '<div class=" check-wp">' +
        '<input type="checkbox" id="check-wp-' + row + '" class="check-wp__input check-wp-' + row + '">' +
        '<label for="check-wp-' + row + '" class="check-wp__label">' +
        '<i class="fab fa-whatsapp "></i>' +
        '       </label>' +
        '</div>' +
        '<button class="remove-phone btn btn-purple delete-row" id="add-phone-' + row + '">' +
        '<i class="fas fa-minus "></i>' +
        '    </button>' +
        ' </div>' +
        ' <button class="btn btn-purple add-wp add-wp-' + row + '">Do you have Whatsapp?</button>' +
        '</div>'




    $('.form-group__phone-div').append(new_row);
    UpdateRemaining(true);
    row++;
    return false;
});

// Remove criterion
$(document).on("click", ".delete-row", function () {
    //  alert("deleting row#"+row);
    if (row > 1) {
        $(this).closest('.form-group__phone').remove();
        row--;
    }
    UpdateRemaining(false);
    return false;
});
