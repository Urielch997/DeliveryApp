import React from 'react';
import '../estilos/ordenes.css';

const Ordenes = () =>{
    
    return(
        <>
            <div className='container-ordenes'>
                <div className='container-datos-ordenes'>
                    <div>
                            <div>
                                <label>Confirmar tus datos</label>
                            </div>
                            <div>
                                <input type='text'/>
                                <button className='btn-ordenes'>Cambiar ubicacion</button>
                            </div>
                            <div>
                            <div>
                                <label>Numero de telefono</label>
                            </div>
                                <div>
                                        <input type='text'/>
                                        <button className='btn-ordenes'>Editar numero</button>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div>
                                <label>Confirmar tus datos</label>
                            </div>
                            <div>
                                <input type='text'/>
                                <button className='btn-ordenes'>Cambiar ubicacion</button>
                            </div>
                            <div>
                            <div>
                                <label>Numero de telefono</label>
                            </div>
                                <div>
                                        <input type='text'/>
                                        <button className='btn-ordenes'>Editar numero</button>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Ordenes;