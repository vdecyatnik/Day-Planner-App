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
var whatTime = (".timeEl");


function checkTime() {


   

    for (var i = 9; i < 18; i++) {

        if (i < currentHourOne) {
            $(whatTime).addClass("past");
        } else if
            (i > currentHourOne); {
            $(whatTime).addClass("future");
        } 
        (i == currentHourOne);
        $(whatTime).addClass("present");

    }
}




checkTime();



//get from local storage and navigate to text area and assign the value
// add  a click event ON A PARENT ELEMENT that can listen to my save button clicks
// Added eventListener to parents Element 
// Save text-input to local storage
$(".saveBtn").on("click" ,  function (e) {
console.log("clicked element");


var clickedSaveButton = $(event.target).data("hour")
console.log(clickedSaveButton);
var value =$(event.target).prev().val();

var planAdded = $("#text").val();
console.log(planAdded);

localStorage.setItem( clickedSaveButton, value);
//localStorage.setItem( )


});

//function saveInfo(){

//How to get from correct button to the hour of the day so save to the correct location

//use object or array to save data and use json stringify to get it out of local storage

//WHEN the user clicks a save button 


//OR var the ClickedHour = $(event.target).parent().attr("id")

//var value =$(event.target).prev().val();

//localStorage.setItem("planner-hour-"+ theClickedHour , value)