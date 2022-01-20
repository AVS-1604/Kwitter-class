const firebaseConfig = {
  apiKey: "AIzaSyCwIKh6NoPQc7ssecT5u-1HTaxaL8Z2gCU",
  authDomain: "kwitter-whjr-eb865.firebaseapp.com",
  databaseURL: "https://kwitter-whjr-eb865-default-rtdb.firebaseio.com",
  projectId: "kwitter-whjr-eb865",
  storageBucket: "kwitter-whjr-eb865.appspot.com",
  messagingSenderId: "906224588292",
  appId: "1:906224588292:web:96028a534630cf01f18751"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);
    
      window.location = "kwitter_page.html";
}