import { OrdenContainer } from "@Styles/CraerOrdenStyle";

const CrearOrdenScreen = () => {
    return (
        <OrdenContainer>
            <div className='first_container'>
                <div className='section'>
                    <div className='item_first_section'>
                        <label>Confirma tus datos</label>
                        <div>
                            <input className='inputBack' />
                            <button className='buttondefult'>Cambiar ubicacion</button>
                        </div>
                    </div>
                    <div className='item_first_section'>
                        <label>Numero de telefono</label>
                        <div>
                            <input className='inputBack' />
                            <button className='buttondefult'>Editar numero</button>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className='title_informacion'>Informacion de pago</div>
                    <div className='content'>
                        <div className='item'>
                            <button className='buttondefult'>Efectivo</button>
                            <button>Tarjeta</button>
                        </div>
                        <div className="item">
                            <label>Necesito vuelto</label>
                            <label>Proximamente</label>
                        </div>
                        <div className="item">
                            <input type='checkbox' />
                            <label>De $</label>
                            <input className='input_change' />
                        </div>
                        <div className="item">
                            <button className='buttondefult'>CONFIRMAR</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='second_container'>

            </div>
        </OrdenContainer>
    )
}

export default CrearOrdenScreen;
