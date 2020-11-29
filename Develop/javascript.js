
//  Get the current hour of the day using moment.js

var currentMoment = moment();
var date = currentMoment.format();

var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
console.log(today);



//get the current hour of the day
var currentHourOne = parseInt(moment().format("H"));
console.log(currentHourOne);







for (var i = 9; i < 18; i++) {

    //comparing moment JS currentHourOne to current hour on the planner.
    //Used id= "hour-9" +i; to loop through 9am-5pm
    var displayEl = $("#hour-" + i);
    var currentHourOne = parseInt(moment().format("H"));

    if (i < currentHourOne) {
        $(displayEl).addClass("past");

    } if (i > currentHourOne) {
        $(displayEl).addClass("future");
    } if (i === currentHourOne) {
        $(displayEl).addClass("present");
    }
    console.log(displayEl);

    if (localStorage.getItem("saved-hour-" + i)) {
        $("#data-text-" + i).val(localStorage.getItem("saved-hour-" + i))
    }



}

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


function clearLocalStorage() {


    localStorage.clear();

}






