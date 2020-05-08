


document.querySelector('#autocomplete-car-model[list]').addEventListener('input', function(e) {
    var input = e.target,
        list = input.getAttribute('list'),
        options = document.querySelectorAll(list + ' option'),
        hiddenInput = document.getElementById(input.getAttribute('id') + '-hidden'),
        inputValue = input.value;

    hiddenInput.value = $('#autocomplete-car-model-list [value="' + inputValue + '"]').data('customvalue');
    console.log(hiddenInput);

    for(var i = 0; i < options.length; i++) {
        var option = options[i];

        if(option.innerText === inputValue) {
            hiddenInput.value = option.getAttribute('data-value');
            break;
        }
    }
});