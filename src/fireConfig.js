import * as firebase from 'firebase';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyDW7GjWTvtSswP3I0-jXZAAsiH8uNvtF1Q",
    authDomain: "delivery-9529b.firebaseapp.com",
    projectId: "delivery-9529b",
})

let db = firebase.firestore();



export default db;