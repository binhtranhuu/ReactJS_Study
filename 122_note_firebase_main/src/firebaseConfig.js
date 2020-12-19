import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var config = {
    apiKey: "AIzaSyCW-rBRVDo6QFv2uZy1fGWlD6WMXz7xwko",
    authDomain: "note-reactjs-manage.firebaseapp.com",
    databaseURL: "https://note-reactjs-manage-default-rtdb.firebaseio.com",
    projectId: "note-reactjs-manage",
    storageBucket: "note-reactjs-manage.appspot.com",
    messagingSenderId: "1074849945441",
    appId: "1:1074849945441:web:4174239746e7f49d939720",
    measurementId: "G-043ZPEPNW3"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  var noteData = firebase.database().ref("dataForNote");

  export default noteData;