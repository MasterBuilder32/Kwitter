//YOUR FIREBASE LINKS
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
    room_name=localStorage.getItem("room_name");
    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                likes:0
                
          });
          document.getElementById("msg").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
u_name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+u_name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class=message_h4>"+message+"</h4>";
like_button="<button class='btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Likes:"+like+"</span> </button> <hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();
function updateLike(message_id){
 console.log("You clicked on the like button"+message_id);
 button_id=message_id;
 likes=document.getElementById(button_id).value;
 updated_like=Number(likes)+1;
 console.log(updated_like);
 firebase.database().ref(room_name).child(message_id).update({
       like:updated_like
 });
}
function logout(){
      localStorage.removeItem("user_name");  
      localStorage.removeItem("room_name"); 
      window.location="index.html";
  }