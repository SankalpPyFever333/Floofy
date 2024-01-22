import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";    

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0zO-9ntw6m22eoiaYataRDUINqDR-4Vs",
  authDomain: "floofy-c3cd0.firebaseapp.com",
  projectId: "floofy-c3cd0",
  storageBucket: "floofy-c3cd0.appspot.com",
  messagingSenderId: "767489452111",
  appId: "1:767489452111:web:20b1200bcaf5eed299a23a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const authentication = getAuth(app)
export default authentication;
