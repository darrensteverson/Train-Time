// Initialize Firebase
var config = {
    apiKey: "AIzaSyDrdSdfSJXb1E7kA1rsD5GqnR6siCKAuqg",
    authDomain: "train-schedule-hw-db124.firebaseapp.com",
    databaseURL: "https://train-schedule-hw-db124.firebaseio.com/",
    storageBucket: "gs://train-schedule-hw-db124.appspot.com"
  };
  
  firebase.initializeApp(config);
  
  var trainData = firebase.database();