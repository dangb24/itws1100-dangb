/*jslint devel: true, white: true, sloppy: true, indent: 3*/
/* In-class JavaScript File 
   Place variables and functions in this file 
   variables declared outside of functions are global (scope) */
var example = "An example.";
var firstName = "Hector";
var age = 19;
var insuranceCutOffAge = 26;

age=50;

function example() {
   alert(example);
}

//function example2() {
////    variables declared inside a function are local to that function (scope)
//   var example = 'A different example.';
//   function alert(example);
//}
function example2() {
   "use strict";
   var example = 'A different example';
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

// slide 26 - form
function showName(formObj) {
   alert(formObj.fname.value + ' ' + formObj.lname.value);
}
