import firebase from 'firebase';
import db from '../fireConfig';

export const UpdateUser = (data,uid) =>{
    if(uid){
        db.collection('users').doc(uid).update(data).then((res)=>{
            if(res){
                console.log(res)
            }
        })
    }
}