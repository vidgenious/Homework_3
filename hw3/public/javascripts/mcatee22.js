// Author: Maxwell McAtee
// Updated: 3/1/2021
// Functionality of page for ordering Cheesecake
// Some clicking functionality.
// JavaScript file for homework three of Software Engineering.
// Professor: Nuxoll


//Function for the Order button
$(document).ready(function(){
$("#button").click(function(){

  var customerNotes = document.getElementById('notes').value;

  //Problem: Did not know how to find if a word was in a textarea
  //Solution link: https://www.codespeedy.com/detect-if-particular-word-type-in-textarea-in-javascript/
  if(customerNotes.includes("vegan") === true){
    alert("Warning: Cheesecakes contain dairy.\nTo continue anyways, delete the word \"vegan\" from the notes.");
  } else {
    var response = 'Thank you! Your order has been placed'

    //Problem: Get value of a radio button selection
    //Solution link: https://stackoverflow.com/questions/8622336/jquery-get-value-of-selected-radio-button
    $("#button").after("<p>" + response + "</p>" +
                       "<p>Amount: " + $('#selection :selected').val() + "</p>" +
                       "<p>Flavor: " + $('input[name="topping"]:checked').val() + "</p>" +
                       "<p>Customer notes: " + $('#notes').val() +  "</p>");
    $(".choices").hide();
  }
})
})

//function for when dropdown choice is clicked
$(document).ready(function(){
$(".dropDownChoice").click(function(){
  //Problem: Needed to get the specific month that was clicked
  //         and not all that were in the class
  //Solution: Use (this)
  //Solution link: https://stackoverflow.com/questions/16091823/get-clicked-element-using-jquery-on-event
  $("#selectedMonth").text($(this).text());

  //post call for the changing of month info section
  $.post("/orders", {}, function(data){
    for(var i=0; i<3; i++){
      var ID = "topping" + i;

      var quantity = data[i].quantity;
      var topping = data[i].topping;

      converted = JSON.stringify(quantity + " " + topping);

      parse = JSON.parse(converted);

      document.getElementById(ID).innerHTML = parse;
    }
  });

})
})
