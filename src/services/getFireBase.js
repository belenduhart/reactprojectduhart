//Obtener base de datos firebase
import firebase from "firebase";
import 'firebase/firestore';


//Permisos para usar app creada
const firebaseConfig = {
    apiKey: "AIzaSyDalk4bqSU9E6zbqXt3JM51RyYd1Ed8yxE",
    authDomain: "laschuecasstore.firebaseapp.com",
    projectId: "laschuecasstore",
    storageBucket: "laschuecasstore.appspot.com",
    messagingSenderId: "682715162754",
    appId: "1:682715162754:web:93068fddd7d2cf43a3ec9b"
};

//F(x) que inicia la conexion entre app y base de datos, tienendo en cuenta apikey
const app = firebase.initializeApp(firebaseConfig)

export function getFirestore(){
    return firebase.firestore(app)
}