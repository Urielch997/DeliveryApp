import { useState, useEffect } from "react";
import firebase from 'firebase';
import db from "../fireConfig";

const useDatos = () =>{
    const[datos,setDatos]= useState([]);
    const[uid,setUid]= useState("");
    const[loged,setloged] = useState(false);
    const[data,setDATA] = useState([])

    const getDatos= () =>{
        if(uid){
            db.collection('users').doc(uid).get().then(async (snapshot)=>{
                setDatos(snapshot.data())
                setloged(true)
            })
            
        }
    }

    const logeado = () =>{
        firebase.auth().onAuthStateChanged((usuario)=>{
            if(usuario){
                fetch('https://graph.facebook.com/v8.0/'+usuario.providerData[0].uid+'/picture?type=normal&access_token='+localStorage.getItem('token')).then((res)=>{
                    setDATA({
                        userlog:{
                            correo:usuario.email,
                            nombre:usuario.displayName,
                            img:res.url,
                        }
                    })
                    setUid(usuario.providerData[0].uid)
                    setloged(true)
                })
                
                
            }else{
                setloged(false)
            }
        })
    }

    useEffect(()=>{
        if(uid){
            db.collection('users').doc(uid).set(data.userlog).then((response)=>{
               
            })
        }
    },[uid])

    useEffect(()=>{
        logeado()
    },[])

    useEffect(()=>{
        getDatos();
    },[uid])



    return[loged,datos];
};

export default useDatos;