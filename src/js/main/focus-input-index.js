$(document).ready(function () {    
    let errorReceiver = document.getElementById("error-receiver");
    let errorReceiverNumber = document.getElementById("error-receiver-number");
    let errorTextarea = document.getElementById("error-textarea"); 
    // let errorDays = document.getElementById("day-errors");
    // let errorTimes = document.getElementById("time-errors");

      $(document).on("focus", "#contact-name", function(){
        errorReceiver.innerHTML = " Please type your name.";
      });
      $(document).on("blur", "#contact-name", function(){
        errorReceiver.innerHTML = " ";
      });
      // $(document).on("focus", "#phoneNumber", function(){
      //   errorReceiverNumber.innerHTML = " Please type your number.";
      // });
      // $(document).on("blur", "#phoneNumber", function(){
    
      //   errorReceiverNumber.innerHTML = " ";
      // });
      $(document).on("focus", "#contact-message", function(){
        errorTextarea.innerHTML = " Please type your message.";
      });
      $(document).on("blur", "#contact-message", function(){
    
        errorTextarea.innerHTML = " ";
      });
      
    
    });