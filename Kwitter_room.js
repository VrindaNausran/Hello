var firebaseConfig = {
    apiKey: "AIzaSyB6NZz6WByF410bxmUgCkgTfx7AqoL2aZg",
    authDomain: "kwitter-fceb1.firebaseapp.com",
    databaseURL: "https://kwitter-fceb1-default-rtdb.firebaseio.com",
    projectId: "kwitter-fceb1",
    storageBucket: "kwitter-fceb1.appspot.com",
    messagingSenderId: "749178216805",
    appId: "1:749178216805:web:2b8b7387073397fa82818c"
  };
  
 firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    });});}
getData();
