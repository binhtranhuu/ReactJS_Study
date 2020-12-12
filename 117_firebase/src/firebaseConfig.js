import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
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
const firebaseConnect = firebase.initializeApp(firebaseConfig);

export default firebaseConnect;

var data = firebase.database().ref('dataForNote');
data.once('value').then(function(snapshot){
    console.log(snapshot.val().note1.id);
})