/*This file contains javascript functions for a fillable login field on the homepage.*/

var jq = jQuery.noConflict();
	   jq(document).ready(function(){

         jq('#login').click(function () {
            if ((document.getElementById("login")) == "Login"){
               jq("fieldset").css({"display":"block"});
            }
            else{
               jq(this).html("Login");
            }
         });
      });

               
      function validate(formObj) {
            // put your validation code here
            // it will be a series of if statements

            var success = true;
            var message = "";

            if (formObj.userid.value == "") {
               message += "You must enter a username\n";
               formObj.userid.focus();
               success = false;
            }
            if (formObj.password.value == "") {
               message += "You must enter a password\n";
               formObj.password.focus();
               success = false;
            }

            if (success){
               alert("User Logged In Successfully");
               jq("fieldset").css({"display":"none"});
               jq("#login").html("Logout");
               return success;
            }
            else {
               alert(message);
               return success;
            }
            return true;

   };