import React, { useEffect,useState } from 'react';
import db from '../fireConfig';
import logo from '../img/alitas.png';
import firebase from 'firebase';
import useDatos from '../hooks/useLog';
import { cleanup } from '@testing-library/react';
import CircularProgress from "@material-ui/core/CircularProgress";

const CardFav =()=>{
    const[loged,datos,setDATA,setDatos] = useDatos();
    const[fav,setFav] = useState([])
    const[lo,setLo] = useState(false);
    const[load,setLoad] = useState(false);
    console.log(loged)

    const getFavUse = () =>{
        if(lo){
                db.collection('users').doc(firebase.auth().currentUser.uid).collection('useFav').get().then((response)=>{
                    setFav(
                    response.docs.map((datos)=>{  
                               return(datos.data())    
                        })
                    )
                        setLoad(true)
            })
        }
    }

    useEffect(()=>{
        setLo(true)
        getFavUse()
        return()=>{cleanup()}
    },[loged])


    console.log(fav)
    return(
        <>
        {load?fav.map((datos,key)=>{
            return(
            
            <div className="card-fav" key={key}>
                <div className="img-fav">
                    <img src={datos.url} alt='logo'/>
                </div>
                <div className="img-fav text-fav-container">
            <label className="text-orange">{datos.restaurante}</label>
                    <label>Categoria</label>
                    <button className="white orange">ver menu.</button>
                </div>
            </div>
          
            )
        }):<CircularProgress classes={{svg:'red'}}/>}
        </>
    )
}

export default CardFav;