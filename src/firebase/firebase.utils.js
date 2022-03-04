import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBv5DscSinsnOHZloc_wkvORqqJCfpdIY0",
    authDomain: "oddamwdobrerece-2e8cb.firebaseapp.com",
    projectId: "oddamwdobrerece-2e8cb",
    storageBucket: "oddamwdobrerece-2e8cb.appspot.com",
    messagingSenderId: "402538213194",
    appId: "1:402538213194:web:d26e8a35876fe3ff8e1bb3",
    measurementId: "G-K3772P97JK"
};

 firebase.initializeApp(config) 

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;