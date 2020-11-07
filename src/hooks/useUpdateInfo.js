import firebase from 'firebase';
import db from '../fireConfig';

export const UpdateUser = (data,uid) =>{
    if(uid){
        db.collection('users').doc(firebase.auth().currentUser.uid).update(data).then((res)=>{
            
        })
    }
}

export const addFav = (data) =>{
    db.collection('users').doc(firebase.auth().currentUser.uid).collection('useFav').doc(data.id).set(data).then(()=>{
        console.log("hola")
    })
}