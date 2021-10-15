import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initilazeAuthentication =()=>{
    initializeApp(firebaseConfig);
}

export default initilazeAuthentication;