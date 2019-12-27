
$(document).ready(function () {

    
       
    var carProducer = $("#autocomplete-car-producer").val();
    

    if($('#autocomplete-car-producer-list option').filter(function(){
        return this.value === carProducer;

        
    }).length) {
        //send ajax request
        $('#autocomplete-car-producer-list option').css({
            'color': 'yellow'
        });
        alert(carProducer);
    }

});