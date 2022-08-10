import {
    getAuth,
    signInAnonymously,
} from "firebase/auth";
import { app } from "./firebaseConfig";

export default async function anonymouSignIn() {
    const auth = getAuth(app);
    try {
        const userCredential = await signInAnonymously(auth);
        return userCredential.user;
    } catch (err) {
        console.log(err);
    }
}
