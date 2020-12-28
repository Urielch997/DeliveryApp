import React,{useEffect,useState} from 'react';
import '../estilos/ordenes.css';
import taco from '../img/taco.png';
import useDatos from '../hooks/useLog';
import {UpdateUser} from '../hooks/useUpdateInfo';
import { cleanup } from '@testing-library/react';

const Ordenes = () =>{
    const[loged,datos,setDATA,setDatos] = useDatos();
    const[useData,setUseData] = useState("");
    
    useEffect(()=>{
        setUseData(datos)
    },[datos])

    return(
        <>
            <div className='container-ordenes'>
                <div className='container-datos-ordenes'>
                    <div className='info-order-date'>
                        <div className='seccion1-order'>
                                <div>
                                    <label>Confirmar tus datos</label>
                                </div>
                                <div className='form-order'>
                                    <input type='text' className='input-login w-60' value={useData?useData.direccion:''} onChange={(e)=>{setUseData({...useData,direccion:e.target.value})}}/>
                                    <button className='btn-ordenes' onClick={()=>{UpdateUser(useData,useData.uid)}}>Cambiar ubicacion</button>
                                </div>
                                <div>
                                <div>
                                    <label>Numero de telefono</label>
                                </div>
                                    <div>
                                            <input type='text' className='input-login w-30' value={useData?useData.telefono:''} onChange={(e)=>{setUseData({...useData,telefono:e.target.value})}}/>
                                            <button className='btn-ordenes' onClick={()=>{UpdateUser(useData,useData.uid)}}>Editar numero</button>
                                    </div>
                                </div>
                            </div>

                            <div className='seccion2-order'>
                                <div>
                                    <label>Informacion de pago</label>
                                </div>
                                <div className='pay-method'>
                                    <div className='order-colum d-flex'>
                                            <button className='btn-ordenes'>Efectivo</button>
                                            <button className='btn-ordenes disabled mt-5'>Tarjeta</button>
                                    </div>
                                    <div className='order-colum row'>
                                        <label>Necesito vuelto</label>
                                        <input type='checkbox' id='checkbox'/>
                                        <label className='checkbox-label-order' htmlFor='checkbox'></label>de $<input type='text' className='price-order'/>
                                    </div>
                                    
                                </div>
                                <div>
                                    <div className='footer-order-info'>
                                            <button className='btn-ordenes'>Confirmar</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='detail-order'>
                            <div className='titulo-detail'><label>Detalle de tu orden</label></div>
                            <div>
                                <ul className="list-order">
                                    <li><img src={taco} className='tacoimg' alt=''/>Taki taki rumba</li>
                                    <li><img src={taco} className='tacoimg' alt=''/>Taki taki rumba</li>
                                    <li><img src={taco} className='tacoimg' alt=''/>Taki taki rumba</li>
                                </ul>
                                <div className='text-center'>
                                    <label >Total: $50.25</label>
                                </div>
                            </div>
                            <div className='footer-datil'>
                                <button className="btn-ordenes">Editar</button>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Ordenes;