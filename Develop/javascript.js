
//  Get the current hour of the day using moment.js

var currentMoment = moment();
var date = currentMoment.format();

var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
console.log(today);



//get the current hour of the day
var currentHourOne = parseInt(moment().format("H"));
console.log(currentHourOne);





//Loop over the hours of 9a to 5pm

//var i=9;
//Element Id = "hour-" + i;
//Currently checking 9am < CurrentHourOne
//9 am is in the past
//$(elementId)


//function showSavedPlanArray(){


//var showPlans= JSON.parse(localStorage.getItem(savedPlanKey));

//console.log(showPlans);




//}

for (var i = 9; i < 18; i++) {

    //comparing moment JS currentHourOne to current hour on the planner.
    //Used id= "hour-9" +i; to loop through 9am-5pm
    var elementId = $("#hour-" + i);
    var currentHourOne = parseInt(moment().format("H"));

    if (i < currentHourOne) {
        $(elementId).addClass("past");

    } if (i > currentHourOne) {
        $(elementId).addClass("future");
    } if (i === currentHourOne) {
        $(elementId).addClass("present");
    }
    console.log(elementId);

     if (localStorage.getItem("saved-hour-" + i)){
        $("#data-text-" + i).val(localStorage.getItem("saved-hour-" + i))
     }
     


}
//get from local storage and navigate to text area and assign the value
// add  a click event ON A PARENT ELEMENT that can listen to my save button clicks
// Added eventListener to parents Element 
// Save text-input to local storage

//added a click event on the save buttons to and matched them to the current hour using data-hour="9"
$(".saveBtn").on("click", function (e) {

    console.log("clicked element");


    var clickedSaveButton = $(event.target).data("hour")
    console.log(clickedSaveButton);
    var value = $(event.target).prev().val();

    var planAdded = $("#textInput").val();
    console.log(planAdded);

    localStorage.setItem("saved-hour-" + clickedSaveButton, value);
    console.log(localStorage);

})


function clearLocalStorage(){

   
    localStorage.clear();
 
}


    


//use object or array to save data and use json stringify to get it out of local storage
//OR var the ClickedHour = $(event.target).parent().attr("id")
//var value =$(event.target).prev().val();
//localStorage.setItem("planner-hour-"+ theClickedHour , value)
