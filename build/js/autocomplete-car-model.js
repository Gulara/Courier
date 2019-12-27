
$(document).ready(function () {
                     
    var carModel = $("#autocomplete-car-model").val();

    if($('#autocomplete-car-model-list option').filter(function(){
        return this.value === carModel;
    }).length) {
        //send ajax request
        alert(carModel);
    }

});