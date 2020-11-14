import firebase from "firebase";

const firebaseConfig = {
        apiKey: "AIzaSyCtRmuMr0UVbHTnZ4MsCfvIbH70GBkw9yA",
        authDomain: "twitterclone-51ac5.firebaseapp.com",
        databaseURL: "https://twitterclone-51ac5.firebaseio.com",
        projectId: "twitterclone-51ac5",
        storageBucket: "twitterclone-51ac5.appspot.com",
        messagingSenderId: "285918868070",
        appId: "1:285918868070:web:d05aa7ae556faf5d2bb3a7",
        measurementId: "G-TQLCYZ31KN"
      };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;