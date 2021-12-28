
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
    function addRoom()
    {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
          });
          localStorage.setItem("room_name", room_name);
          window.location = "connect_page.html";
    }
    
    function getData() 
    {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
           Room_names = childKey;
          //Start code
          row = "<div class = 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names + "</div><hr>";
          document.getElementById("output").innerHTML+= row;
          //End code
          });});}
    getData();
    function redirectToRoomName(name)
    {
          localStorage.setItem("room_name", name);
          window.location = "connect_page.html"
    }
