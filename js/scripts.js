// Business Logic for DestinationLog -------------------------
function DestinationLog() {
  this.destinations = [],
  this.currentId = 0
}

DestinationLog.prototype.addDestination = function(destination) {
  destination.id = this.assignId();
  this.destinations.push(destination);
}

DestinationLog.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

// DestinationLog.prototype.sortByRank = function (ranking) {


// Business Logic for Destination ------------------------
function Destination(locationName, landmarks, timeOfYear, notes, ranking) {
  this.locationName = locationName,
  this.landmarks = landmarks,
  this.timeOfYear = timeOfYear,
  this.notes = notes,
  this.ranking = ranking
}
 //  function DestinationSort(array) {
 //    array.sort(function(x, y){
 //     return x.ranking > y.ranking
 //
 //   });
 // }




// UserInterface  Logic
$(document).ready(function(){
  var destinationLog = new DestinationLog();
  var i = 0;
  $("#logForm").submit(function(event){
    event.preventDefault();
    var locationNameInput = $("#locationName").val();
    var landmarksInput = [];
    landmarksInput.push($("#landmarks1").val());
    landmarksInput.push($("#landmarks2").val());
    landmarksInput.push($("#landmarks3").val());
    landmarksInput.push($("#landmarks4").val());
    var timeOfYearInput = $("#timeOfYear").val();
    var notesInput = $("#notes").val();
    var rankingInput = parseInt($("#ranking").val());
    var destination = new Destination(locationNameInput, landmarksInput, timeOfYearInput, notesInput, rankingInput);
    destinationLog.addDestination(destination);
    $("#info").append("<li>" + destinationLog.destinations[destinationLog.currentId - 1].locationName + "</li>");
    $(".test").append("<p>" + destinationLog.destinations[destinationLog.currentId - 1].landmarks + "</br>" + destinationLog.destinations[destinationLog.currentId - 1].timeOfYear + "</br>" + destinationLog.destinations[destinationLog.currentId - 1].notes + "</br>" + destinationLog.destinations[destinationLog.currentId - 1].ranking + "</p>");
    // console.log(landmarksInput);
    // console.log(destinationLog);
    i++;
  });
});
