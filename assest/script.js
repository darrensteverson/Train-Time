// Initialize Firebase
var config = {
  apiKey: "AIzaSyDrdSdfSJXb1E7kA1rsD5GqnR6siCKAuqg",
  authDomain: "train-schedule-hw-db124.firebaseapp.com",
  databaseURL: "https://train-schedule-hw-db124.firebaseio.com/",
  storageBucket: "gs://train-schedule-hw-db124.appspot.com"
};

firebase.initializeApp(config);

var trainData = firebase.database();


// Start Click Event
$("#addNew").on("click", function (event) {
  event.preventDefault();

  var trainName = $("#trainName").val().trim();
  var destiationName = $("#destiationName").val().trim();
  var trainTime = $("#trainTime").val().trim();
  var trainFrequency = $("#trainFrequency").val().trim();

  var addNewTrain = {
    name: trainName,
    destiation: destiationName,
    trainTime: trainTime,
    trainFrequency: trainFrequency
  };

  // Push New Train Objetc to Firebase
  trainData.ref().push(addNewTrain);

  // Clear Text Inputs

  $("#trainName").val("");
  $("#destiationName").val("");
  $("#trainTime").val("");
  $("#trainFrequency").val("");

  // Alert User of New Train Added
  alert("New Train Added to Schedule");

});
// End Click Event

// Firebase Logging
trainData.ref().on("child_added", function (childSnapshot, prevChildKey) {
  console.log(childSnapshot.val());

  var name = childSnapshot.val().name;
  var destination = childSnapshot.val().destination;
  var first = childSnapshot.val().firstTrain;
  var frequency = childSnapshot.val().frequency;


  // Append New Train to Table
  $("#table-display > tbody").append(
    $("<tr>").append(
      $("<td>").text(name),
      $("<td>").text(destination),
      $("<td>").text(first),
      $("<td>").text(frequency)
    ),
      
  )});