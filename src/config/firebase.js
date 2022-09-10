// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { getStorage } from "firebase/storage"
import {doc, getFirestore, setDoc} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD8Ekw5zJHbah1XBDWKi6nDOzPB_dluKRE",
    authDomain: "push-up-track.firebaseapp.com",
    projectId: "push-up-track",
    storageBucket: "push-up-track.appspot.com",
    messagingSenderId: "504018237907",
    appId: "1:504018237907:web:c935befc74c3a30e4b5726",
    measurementId: "G-G2QW8G0GV7"
};
const provider = new GoogleAuthProvider();

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then(async (res) => {
            console.log(res)
            const username = res.user.displayName;
            const email = res.user.email;
            await setDoc(doc(db, "users", res.user.uid), {
                username,
                email,
                uid: res.user.uid
            });
        })
        .catch((error) => {
            return error
        });
};
