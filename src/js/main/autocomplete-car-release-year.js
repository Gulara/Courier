
$(document).ready(function () {
                     
    var carReleaseYear = $("#autocomplete-release-year").val();

    if($('#autocomplete-release-year-list option').filter(function(){
        return this.value ===carReleaseYear;
    }).length) {
        //send ajax request
        alert(carReleaseYear);
    }

});