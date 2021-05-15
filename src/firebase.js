import firebase from 'firebase/app'
import 'firebase/firebase-database'

const config = {
   apiKey: "AIzaSyD83yOTXrDKt8H6HQfBOw1yCGqUser8KTE",
     authDomain: "awesome-24266.firebaseapp.com",
     databaseURL: "https://awesome-24266-default-rtdb.europe-west1.firebasedatabase.app",
     projectId: "awesome-24266",
     storageBucket: "awesome-24266.appspot.com",
     messagingSenderId: "123667909258",
     appId: "1:123667909258:web:944c8d38fa06316c83fb73"
}
 
firebase.initializeApp(config)

export default firebase
  
export const database = firebase.database()