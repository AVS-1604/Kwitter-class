// Your web app's Firebase configuration
// Your web app's Firebase configuration

//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCwIKh6NoPQc7ssecT5u-1HTaxaL8Z2gCU",
      authDomain: "kwitter-whjr-eb865.firebaseapp.com",
      databaseURL: "https://kwitter-whjr-eb865-default-rtdb.firebaseio.com",
      projectId: "kwitter-whjr-eb865",
      storageBucket: "kwitter-whjr-eb865.appspot.com",
      messagingSenderId: "906224588292",
      appId: "1:906224588292:web:96028a534630cf01f18751"
    };
    
    // Initialize Firebase
    var app = initializeApp(firebaseConfig);

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebaseConfig.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name-"+Room_names);
      row= "<div class= 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.ad)'>#"+ Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
        window.location = "index.html"
}


