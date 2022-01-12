//YOUR FIREBASE LINKS
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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
        window.location = "index.html"
}
function send()
{
      msg = document.getElementById("msg").value;
      firebaseConfig.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}