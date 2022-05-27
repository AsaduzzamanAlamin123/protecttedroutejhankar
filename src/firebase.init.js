// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx4n7MsUT0VKUncIGYlscp5FsKba1WEeA",
  authDomain: "user-privet-auth.firebaseapp.com",
  projectId: "user-privet-auth",
  storageBucket: "user-privet-auth.appspot.com",
  messagingSenderId: "808596008140",
  appId: "1:808596008140:web:6ad5b687ed829d99866669"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;
