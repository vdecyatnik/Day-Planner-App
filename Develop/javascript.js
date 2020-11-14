//  Get the current hour of the day using moment.js

var currentMoment = moment();
var date = currentMoment.format();

var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
console.log(today);



//get the current hour of the day
var currentHourOne = parseInt(moment().format("H"));
console.log(currentHourOne);

//  Loop over the hours of the day from i=9 to i <-=17

//  var i =9

function checkTime() {


    

    for (var i = 9; i < 18; i++) {

        if (i < currentHourOne) {
            $(textInput).addClass("past");
        } else if
            (i > currentHourOne); {
            $(textInput).addClass("future");
        } 
        (i === currentHourOne);
        $(textInput).addClass("present");

    }
}





checkTime();

//  Element Id = "hour-" +i

//  Currently checking 9AM< current hour
//  equal to or greater than current hour

//  9AM is in the past 
//  Select matching element $(ElementID).addClass("is-past"); OR
// $(ElementId).css("background");

// .is-past, is-present, is-future

//  $( Element ID)

//get from local storage and navigate to text area and assign the value



// add  a click event ON A PARENT ELEMENT that can listen to my save button clicks

//How to get from correct button to the hour of the day so save to the correct location

//use object or array to save data and use json stringify to get it out of local storage

//WHEN the user clicks a save button 

//THEN I need to save the associated textfor the associated time

// GET the current hour from the event.target (the clicked button)
// var theClickedHour = $(event.target).data("hour")

//OR var the ClickedHour = $(event.target).parent().attr("id")

//var value =$(event.target).prev().val();

//localStorage.setItem("planner-hour-"+ theClickedHour , value );