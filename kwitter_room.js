
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAf8EDWbuGITN7vc1glDIv9u67FidCj9zs",
      authDomain: "project-tech-c0a06.firebaseapp.com",
      databaseURL: "https://project-tech-c0a06-default-rtdb.firebaseio.com",
      projectId: "project-tech-c0a06",
      storageBucket: "project-tech-c0a06.appspot.com",
      messagingSenderId: "967926203396",
      appId: "1:967926203396:web:d14854334f34804cada151",
      measurementId: "G-SHS5TSH8CR"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    user_name=localStorage.getItem("user_name");
    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
    }
    document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log ("Room Name"+Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";

}
function logout(){
    localStorage.removeItem("user_name");  
    localStorage.removeItem("room_name"); 
    window.location="index.html";
}
