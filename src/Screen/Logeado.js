import React, { useEffect, useState } from 'react';
import picture from '../img/burger.jpg';
import '../estilos/logeado.css';
import {connect} from 'react-redux'; 
import facebookLogo from '../img/facebook.png';
import firebase from 'firebase';
import {addsesion} from '../store/sesion/reducer';
import twitterLogo from '../img/twitter.png';
import useDatos from '../hooks/useLog';
import CircularProgress from "@material-ui/core/CircularProgress";

const Logeado = (props) =>{
    const history = props.history;
    const[loged,datos] = useDatos();

    const logout = () =>{
        firebase.auth().signOut().then(function() {
            history.push('/')
          }).catch(function(error) {
            // An error happened.
          });
    }

    console.log(datos)

    return(
        <div className='logeado-container'>
            <div className='rowLogeado'>
                <div className='seccion-logeado'>
                            <h2>Perfil</h2>
                            <div className='containerPicLog'>
                                {loged?<img src={datos.img} alt='Foto de perfil' className='picture-profileLoageado'/>:<CircularProgress classes={{svg:'red'}}/>}
                            </div>
                            
                        </div>
                        <div className="m-10">
                            <label>Datos personales</label>
                            <div className='form-logeado'>
                            <div className="form-group-logeado">
                                <label className='labelLogeado'>Nombre</label>
                                <input type='text' className="input-login" value={datos.nombre}/>
                            </div>
                            <div className="form-group-logeado">
                                <label className='labelLogeado'>Correo Electronico</label>
                                <input type='email' className="input-login" value={datos.correo}/>
                            </div>
                            <div className="form-group-logeado">
                                <label className='labelLogeado'>Telefono</label>
                                <input type='text' className="input-login"/>
                            </div>
                            <div className="d-flex justify-content-center aling-items-center">
                                <button className='button-logeado w-40'>Editar</button>
                            </div>
                        </div>
                    </div>
            </div>
            <div className='rowLogeado'>
                <div className="seccion-logeado2">
                    <label>Direccion de entrega</label>
                    <div className='form-logeado d-flex'>
                            <button className='button-logeado'>Añadir direccion de entrega</button>
                            <button className='button-logeado gray'>Bo los remedios zacatecoluca</button>
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