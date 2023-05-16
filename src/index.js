// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5BJMCIAI6hoXY3hD3k-QW_NnuX5GV5Es",
  authDomain: "firstproject-68c11.firebaseapp.com",
  projectId: "firstproject-68c11",
  storageBucket: "firstproject-68c11.appspot.com",
  messagingSenderId: "649357505390",
  appId: "1:649357505390:web:7e4f5d2e10c35603c0877f",
  measurementId: "G-FH35KRD446"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)
const db = getFirestore(app);

const saveBtn = document.querySelector(".crud_saveBtn")
saveBtn.addEventListener("click", async () => {
  const collectionRef = collection(db, "player_info")
  const newInfo = await addDoc(collectionRef, {
    player_name: "sassybaka2020",
    hours_played: "108.4",
    version: "11"
  });
  console.log(`Added new player info: ${newInfo.id}`)
})
