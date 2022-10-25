/* eslint-disable no-undef */
/* Lab 6 JavaScript File  */

// this is the block that allows code to execute only after the DOM
// is fully loaded:
$(document).ready(function () {

   //("The DOM is now loaded and can be manipulated.");
   //alert("BEFORE you start this lab, create a new branch in your repo for lab6 and switch to it.");
   //alert("The instructions for this lab are in the lab6.js file.");

   // example event handler:
   $('#labButton').click(function () {
      alert('You\'ve clicked the lab button');
   });

   // Problem 1: When the user clicks on the <h1>,
   //change the 'your name' to your own name (ie Joe Smith)
   //change the text to be your name in small caps
   //change the color to be something other than blue or black
   //change the text size to 110% or normal
   // (note that there is already a class defined for the area where your name should go)
   $(".myName").click(function () {
      $(this).html("Beatrice Dang").css({"font-size": "110%","font-variant": "small-caps", "color" : "pink" });
   });

   // Problem 2: Make the "lorem ipsum" paragraphs
   //   vanish over a 6/10 sec duration when a user clicks "Hide text";
   //   make it appear within a 1 1/2 second duration when a user clicks "Show text":
   $("#hideText").click(function() {
      $("#showHideBlock p").fadeOut(600);
   });

   $("#showText").click(function() {
      $("#showHideBlock p").fadeIn(1500);
   });

   // Problem 3: When a normal list item is clicked, make it turn red using addClass.
   //            When a red list item is clicked change it back (you need to look up the appropriate jQuery method to do this)
   // (Note that there already is a css style named ".red" in lab6.css)
   $("#labList li").click(function() {
      if ($(this).hasClass("red")) {
         $(this).removeClass("red");
      }else{
         $(this).addClass("red");
      }
   });

   // Problem 4: When a user clicks on the "Add a list item" button, add a new list item to the end of the list.
   // Problem 4b - what happens when you click on the new li?  Why? (Explain in your readme file)
   $("#AddListItem").click(function() {
      $("#labList").append("<li>New list item</li>");
   });

   // Problem 5: lookup another jquery method and use this code on the "Toggle Text"
   // link to show/hide the text:
   $("#toggleText").click(function() {
      $("#showHideBlock p").toggle({
         function() { $("#showHideBlock p").fadeOut(600);},
         function() { $("#showHideBlock p").fadeIn(1500);}
      });
   });


   /* When you are done:
     Add this to your github repos,
     Post this lab to your iit website,
     link it from your projects page,
     and a link to your project page and repo in the readme file.
     Zip up your iit folder and submit to LMS
 */
});
