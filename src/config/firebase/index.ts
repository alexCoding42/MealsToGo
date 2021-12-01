import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDZXi64MM4oE07301O9vny7Ts9BW8971iU",
  authDomain: "mealstogo-6e31e.firebaseapp.com",
  projectId: "mealstogo-6e31e",
  storageBucket: "mealstogo-6e31e.appspot.com",
  messagingSenderId: "177616733624",
  appId: "1:177616733624:web:ac34626bcd8f06b3ddbb4d",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
