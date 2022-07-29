import firebase from 'firebase/compat/app';
  
const firebaseConfig = {

        apiKey: "AIzaSyBAr1u1wAE-RWlnPRMhL92kcZ7e0toDkBQ",
        authDomain: "doctordb-bb4fb.firebaseapp.com",
        databaseURL: "https://doctordb-bb4fb-default-rtdb.firebaseio.com",
        projectId: "doctordb-bb4fb",
        storageBucket: "doctordb-bb4fb.appspot.com",
        messagingSenderId: "354772698442",
        appId: "1:354772698442:web:9fe29833610c15e0a66db3",
        measurementId: "G-FS0WKC11JQ"
    };
      // const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
//   firebase.initializeApp(firebaseConfig);
//   var auth = firebase.auth();

  
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export {auth , firebase};