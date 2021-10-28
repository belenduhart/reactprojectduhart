import firebase from "firebase";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDalk4bqSU9E6zbqXt3JM51RyYd1Ed8yxE",
    authDomain: "laschuecasstore.firebaseapp.com",
    projectId: "laschuecasstore",
    storageBucket: "laschuecasstore.appspot.com",
    messagingSenderId: "682715162754",
    appId: "1:682715162754:web:93068fddd7d2cf43a3ec9b"
};

const app = firebase.initializeApp(firebaseConfig)

export function getFirestore(){
    return firebase.firestore(app)
}