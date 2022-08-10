// import admin from "./adminConfig";
import anonymouSignIn from "./anonymouSignIn";
import { db } from "./firebaseConfig";
import {
    equalTo,
    onValue,
    orderByChild,
    query,
    ref,
    update,
} from "firebase/database";
import { collection, doc, onSnapshot } from "firebase/firestore";

export async function getTournaments(cb: Function) {
    const user = await anonymouSignIn();
    if (!user) return [];

    const baseRef = collection(db, "tournaments");
    onSnapshot(baseRef, (snapshot) => {
        const data = snapshot.docs.map((doc) => doc.data());
        cb(data);
    });
}

export async function getTournament(tournamentId: string, cb: Function) {
    const user = await anonymouSignIn();

    if (user) {
        const baseRef = doc(db, `/tournaments/${tournamentId}`);
        onSnapshot(baseRef, (snapshot) => {
            if (snapshot.exists()) {
                const data: Object = snapshot.data();
                cb(data);
            }
        });
    }
}

// export async function getRounds(tournamentId: string, cb: Function) {
//     const user = await anonymouSignIn();

//     if (user) {
//         const baseRef = doc(db, `/tournaments/${tournamentId}`);

//         onValue(baseRef, (snapshot) => {
//             const data: Object = snapshot.val();
//             cb(data);
//         });
//     }
// }

// export async function getHeats(
//     tournamentId: string,
//     roundId: string,
//     cb: Function
// ) {
//     const user = await anonymouSignIn();

//     if (user) {
//         const baseRef = ref(db, `/heats/${tournamentId}/${roundId}`);

//         onValue(baseRef, (snapshot) => {
//             const data: Object = snapshot.val();
//             cb(data);
//         });
//     }
// }

// export async function getHeat(
//     tournamentId: string,
//     roundId: string,
//     heatId: string,
//     cb: Function
// ) {
//     const user = await anonymouSignIn();

//     if (user) {
//         const baseRef = ref(db, `/heats/${tournamentId}/${roundId}/${heatId}`);

//         onValue(baseRef, (snapshot) => {
//             const data: Object = snapshot.val();
//             cb(data);
//         });
//     }
// }
