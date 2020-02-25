
// $(document).ready(function () {

    
       
//     var carProducer = $("#autocomplete-car-producer").val();
    

//     if($('#autocomplete-car-producer-list option').filter(function(){
//         return this.value === carProducer;

        
//     }).length) {
//         //send ajax request
//         $('#autocomplete-car-producer-list option').css({
//             'color': 'yellow'
//         });
//         alert(carProducer);
//     }

// });

document.querySelector('#autocomplete-car-producer[list]').addEventListener('input', function(e) {
    var input = e.target,
        list = input.getAttribute('list'),
        options = document.querySelectorAll(list + ' option'),
        hiddenInput = document.getElementById(input.getAttribute('id') + '-hidden'),
        inputValue = input.value;


        // var value = $(this).val();
      

    hiddenInput.value = $('#autocomplete-car-producer-list [value="' + inputValue + '"]').data('customvalue');
    // console.log(hiddenInput.value);

    for(var i = 0; i < options.length; i++) {
        var option = options[i];

        if(option.innerText === inputValue) {
            hiddenInput.value = option.getAttribute('data-value');
            break;
        }
    }
});