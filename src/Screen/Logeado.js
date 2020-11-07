import React, { useEffect, useState } from 'react';
import '../estilos/logeado.css';
import {connect} from 'react-redux'; 
import facebookLogo from '../img/facebook.png';
import firebase from 'firebase';
import {addsesion} from '../store/sesion/reducer';
import twitterLogo from '../img/twitter.png';
import useDatos from '../hooks/useLog';
import CircularProgress from "@material-ui/core/CircularProgress";
import { cleanup } from '@testing-library/react';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import { Modal } from 'react-responsive-modal';
import Map from '../componentes/Map';
import {UpdateUser} from '../hooks/useUpdateInfo';

const Logeado = (props) =>{
    const history = props.history;
    const[loged,datos] = useDatos();
    const[login,setLogin] = useState(false);
    const[useData,setUseData] = useState({
        nombre:'',
        img:'',
        correo:'',
        telefono:'',
        direccion:'',
    })
    const[open,setOpen] = useState(false);


    function onOpenModal(){
        setOpen(true);
      };
     
      function onCloseModal(){
        setOpen(false);
      };

    useEffect(()=>{
        setUseData({
            nombre:datos.nombre,
            img:datos.img,
            correo:datos.correo,
            uid:datos.uid,
            telefono:datos.telefono,
            direccion:datos.direccion
        })
        setLogin(loged);
       return ()=>{cleanup()}
    },[datos])

    const logout = () =>{
        firebase.auth().signOut().then(function() {
            if(loged){
                history.push('/')
            }
            
          }).catch(function(error) {
            // An error happened.
          });
    }

    return(
        <div className='logeado-container'>
            <div className='rowLogeado'>
                <div className='seccion-logeado'>
                            <h2>Perfil</h2>
                            <div className='containerPicLog'>
                                {login?<img src={useData.img} alt='Foto de perfil' className='picture-profileLoageado'/>:<CircularProgress classes={{svg:'red'}}/>}
                            </div>
                            
                        </div>
                        <div className="m-10">
                            <label>Datos personales</label>
                            <div className='form-logeado'>
                            <div className="form-group-logeado">
                                <label className='labelLogeado'>Nombre</label>
                                <input type='text' className="input-login" value={useData.nombre?useData.nombre:''} onChange={(e)=>{setUseData({...useData,nombre:e.target.value})}}/>
                            </div>
                            <div className="form-group-logeado">
                                <label className='labelLogeado'>Correo Electronico</label>
                                <input type='email' className="input-login" value={useData.correo?useData.correo:''} onChange={(e)=>{setUseData({...useData,correo:e.target.value})}}/>
                            </div>
                            <div className="form-group-logeado">
                                <label className='labelLogeado'>Telefono</label>
                                <input type='text' className="input-login" value={useData.telefono?useData.telefono:''} onChange={(e)=>{setUseData({...useData,telefono:e.target.value,uid:useData.uid})}}/>
                            </div>
                            <div className="d-flex justify-content-center aling-items-center">
                                <button className='button-logeado w-40' onClick={()=>{UpdateUser(useData,useData.uid)}}>Editar</button>
                            </div>
                        </div>
                    </div>
            </div>
            <div className='rowLogeado'>
                <div className="seccion-logeado2">
                    <label>Direccion de entrega</label>
                    <Modal open={open} onClose={onCloseModal} center>
                        <Map/>
                    </Modal>
                    <div className='form-logeado d-flex'>
                            <button className='button-logeado' onClick={onOpenModal}>Añadir direccion de entrega</button>
                            <button className='button-logeado gray'>{datos.direccion?datos.direccion:"Seleccione una direccion"}</button>
                    </div>
                </div>
                <div className="seccion-logeado2">
                    <label>Acerca de llevo</label>
                    <div className='form-logeado d-flex'>
                            <button className='button-logeado'>Terminos y condiciones</button>
                            <button className='button-logeado gray'>Contactanos</button>
                    </div>
                    <div className="d-flex">
                        <button className='button-logeado w-40' onClick={logout}>Cerrar sesion</button>
                    </div>
                </div>
            </div>
            <div className='rowLogeado'>
                <label>Mas sobre Llevo App</label>
                <div className='redes-logeado d-flex'>
                    <button className='button-logeado r-15 w-50'>contactanos</button>
                    <button className='button-logeado r-15 w-50'>Asocia tu negocio</button>
                    <button className='button-logeado r-15 w-50'>mejora tu marca</button>
                </div>
                <div className='redes-logeado d-flex m-10'>
                    <button className='button-logeado r-15 w-50'>Seguinos!</button>
                    <button className='button-logeado r-15 w-50 facebookbg'><img src={facebookLogo} className="w-10px"/></button>
                    <button className='button-logeado r-15 w-50 twitterbg'><img src={twitterLogo} className="w-10px"/></button>
                </div>
            </div>
        </div>
    );
}


const mapStateStore = state =>{
    return {
        sesion:addsesion(state)  
    }
  }

export default connect(mapStateStore)(Logeado);