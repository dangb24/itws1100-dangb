/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
/*jslint devel: true, white: true, sloppy: true, indent: 3*/
/* In-class JavaScript File 
   Place variables and functions in this file */

// variables declared outside of functions are global (scope)
var example = 'An example.';
var firstName = 'Hector';
var age = 19;



// slide 12
// age = 50;


var insuranceCutOffAge = 26;


// eslint-disable-next-line no-redeclare
function example() {
   alert(example);  
}

function example2() {
   // variables declared inside a function are local to that function (scope)
   var example = 'A different example.';
   alert(example);
}


// Slide 15
function cube(x) {
  return x * x * x;
}
// Slide 22
function writeIt() {
  var element = document.getElementById("output");
  element.innerHTML = "Some new text";
}

// new slide 23
function changeFoot() {
   document.getElementsByTagName("footer")[0].innerHTML = "Hello World!";
}

// slide 27 - form
  function showName(formObj) {
    alert(formObj.fname.value + ' ' + formObj.lname.value);
 }
           