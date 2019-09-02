import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database'

//Thong so cau hinh Firebase App
const firebaseConfig = {
    apiKey: "AIzaSyDC1duZHuRKq_eRowg1CPCK60Yw3lhpwx8",
    authDomain: "animepro-react.firebaseapp.com",
    databaseURL: "https://animepro-react.firebaseio.com",
    projectId: "animepro-react",
    storageBucket: "",
    messagingSenderId: "267529101140",
    appId: "1:267529101140:web:93029eac1263023d"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const animeData = firebase.database().ref("anime");

export const users = firebase.database().ref('users');

export const newusers = firebase.database().ref('newusers');