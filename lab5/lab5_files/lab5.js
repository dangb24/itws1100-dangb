/* Lab 5 JavaScript File 
   Place variables and functions in this file */

function validate(formObj) {
   // put your validation code here
   // it will be a series of if statements

   var success = true;
   var message = "";

   if (formObj.lastName.value == "") {
     message += "You must enter a last name\n";
     formObj.lastName.focus();
     success = false;
   }
   if (formObj.title.value == "") {
     message += "You must enter a title\n";
     formObj.title.focus();
     success = false;
   }
   if (formObj.org.value == "") {
     message += "You must enter an organization\n";
     formObj.org.focus();
     success = false;
   }
   if (formObj.title.value == "") {
     message += "You must enter a title\n";
     formObj.title.focus();
     success = false;
   }
   if (formObj.pseudonym.value == "") {
      message += "You must enter a nickname\n";
      formObj.pseudonym.focus();
      success = false;
   }
   if (formObj.comments.value == "") {
     message += "You must enter your comments\n";
     formObj.comments.focus();
     success = false;
   }

   if (success){
     alert("Submission was successful");
     return success;
   }
   else {
     alert(message);
     return success;
   }

   return true;
}

function emptyText(thisID) { //even if the user types the same message, how can we make sure we are not emptying it?
  var stuff = document.getElementById(thisID); 
     if (stuff.value == "Please enter your comments"){
       stuff.value = "";
   }
}

function resetText(thisID) {
  var stuff = document.getElementById(thisID);
    if (stuff.value == ""){
      stuff.value = "Please enter your comments";
}

}

function userNickname() {
  var message = document.addForm.firstName.value + " " + document.addForm.lastName.value + " is " + document.addForm.pseudonym.value;
  alert(message);
}



