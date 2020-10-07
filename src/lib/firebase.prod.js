import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { seedDatabase } from '../seed'

const firebaseConfig = {
    apiKey: "AIzaSyAfhtWd6a69U-PGRtU7Ts52eom398oFiWA",
    authDomain: "netflix-main.firebaseapp.com",
    databaseURL: "https://netflix-main.firebaseio.com",
    projectId: "netflix-main",
    storageBucket: "netflix-main.appspot.com",
    messagingSenderId: "458196646841",
    appId: "1:458196646841:web:dc9f14b174647181569468",
    measurementId: "G-Y3RB7NXJRD"
  };

const firebase = Firebase.initializeApp(firebaseConfig);
seedDatabase(firebase)

export { firebase }