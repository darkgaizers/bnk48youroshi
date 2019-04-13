//top of the file
import firebase from 'firebase/app'
require('firebase/firestore')

// Initialize Firebase
var config = {
    apiKey: "AIzaSyC5PstXxqWWpOLAPW3hAtlRlZ_CKUHx7xo",
    authDomain: "bnk48fans-29683.firebaseapp.com",
    databaseURL: "https://bnk48fans-29683.firebaseio.com",
    projectId: "bnk48fans-29683",
    storageBucket: "bnk48fans-29683.appspot.com",
    messagingSenderId: "599530218442"
};
firebase.initializeApp(config);
export const db = firebase.firestore()
/* 
export const InitAdmin = () => {
    var admin = require("firebase-admin");

    var serviceAccount = require("../bnk48fans-29683-firebase-adminsdk-1kt56-f5fff4a3f1.json");

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://bnk48fans-29683.firebaseio.com"
    });
} */