 // Your web app's Firebase configuration
 var firebaseConfig = {
     apiKey: "AIzaSyD4FRyWOxywD7NoZP6INqAkAxyS1eoGpc8",
     authDomain: "mvp-web-youlink.firebaseapp.com",
     databaseURL: "https://mvp-web-youlink.firebaseio.com",
     projectId: "mvp-web-youlink",
     storageBucket: "mvp-web-youlink.appspot.com",
     messagingSenderId: "321860454252",
     appId: "1:321860454252:web:453b69e821380776bfd549",
     measurementId: "G-DY0EFCNVEK"
 };

 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 //firebase.analytics();

 firebase.auth().onAuthStateChanged(function(user) {
     if (user) {
         window.location.href = "home.html";
     }

 });