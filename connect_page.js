//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyCDOamsnlSWJccENuv03Ed0fazwgjPaTGM",
  authDomain: "connect-67845.firebaseapp.com",
  databaseURL: "https://connect-67845-default-rtdb.firebaseio.com",
  projectId: "connect-67845",
  storageBucket: "connect-67845.appspot.com",
  messagingSenderId: "182081847541",
  appId: "1:182081847541:web:5323690862f61b4940c5bc"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
  function send()
  {
        msg = document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0    
        });
        document.getElementById("msg").value = "";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
 } });  }); }
getData();