// Business Logic for DestinationLog -------------------------
function DestinationLog() {
  this.destinations = [],
  this.currentId = 0
}

DestinationLog.prototype.addDestination = function(destination) {
  destination.id = this.assignId();
  this.destination.push(destination);
}

DestinationLog.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

// Business Logic for Destination ------------------------
function Destination(locationName, landmarks, timeOfYear, notes, ranking) {
  this.locationName = locationName,
  this.landmarks = landmarks,
  this.timeOfYear = timeOfYear,
  this.notes = notes,
  this.ranking = ranking
}


// UserInterface  Logic
$(document).ready(function(){
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
    var destinationInput = new Destination(locationNameInput, landmarksInput, timeOfYearInput, notesInput, rankingInput);
    console.log(landmarksInput);
  });
});
