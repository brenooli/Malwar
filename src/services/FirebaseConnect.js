import firebase from 'firebase';

export default firebaseConfig = () => {

    var firebaseConfig = {
        apiKey: "AIzaSyDafo1DwJAYWsiZ-uYekrtojkIRUwL7cww",
        authDomain: "malwar-88a56.firebaseapp.com",
        databaseURL: "https://malwar-88a56.firebaseio.com",
        projectId: "malwar-88a56",
        storageBucket: "",
        messagingSenderId: "989248759409",
        appId: "1:989248759409:web:92b4edcde4540d78"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

}