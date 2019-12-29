$(document).ready(function () {

      var parsleyConfig = {
        errorsContainer: function(parsleyField) {
            // fieldInstance is a ParlseyField instance
            // you can access the dom element with fieldInstance.$element
            var fieldSet = parsleyField.$element.closest('fieldset');
            
            // if this element is nested inside a fieldset, set the container as the last element of that fieldset
            if (fieldSet.length > 0) {
                return fieldSet.find('.checkbox-errors');
            }
            
            return parsleyField;
        }
    };
    
        
    $("#driver-document-form").parsley(parsleyConfig);
    
    $("form").on('submit', function() {

        
        var f = $(this);
        f.parsley().validate();
        
        // if (f.parsley().isValid()) {
          
        // } else {
        //     alert('There are validation errors');
        // }
      

       
      
    });
  
  });