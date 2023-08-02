import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {

    apiKey: "AIzaSyCC-Najm1pMGrr7QZ-BcspUSTkNkmtc9lE",
    authDomain: "elproyecto-479f6.firebaseapp.com",
    projectId: "elproyecto-479f6",
    storageBucket: "elproyecto-479f6.appspot.com",
    messagingSenderId: "744409536573",
    appId: "1:744409536573:web:848dda6096f016118db254"
  };
  



const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);