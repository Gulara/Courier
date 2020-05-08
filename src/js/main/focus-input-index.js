$(document).ready(function () {    
    let errorReceiver = document.getElementById("error-receiver");
    let errorReceiverNumber = document.getElementById("error-receiver-number");
    let errorTextarea = document.getElementById("error-textarea"); 

      $(document).on("focus", "#contact-name", function(){
        errorReceiver.innerHTML = " Please type your name.";
      });
      $(document).on("blur", "#contact-name", function(){
        errorReceiver.innerHTML = " ";
      });
   
      $(document).on("focus", "#contact-message", function(){
        errorTextarea.innerHTML = " Please type your message.";
      });
      $(document).on("blur", "#contact-message", function(){
    
        errorTextarea.innerHTML = " ";
      });
      
    
    });