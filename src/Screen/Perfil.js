import React, { Component } from 'react';
import userprofile from '../img/userprofile.png';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import '../estilos/perfil.css';
import firebase from 'firebase';


class Perfil extends Component{

    Logout = () =>{
        const history = this.props.history
        return(
        firebase.auth().signOut().then((success) => {
            history.push('/')
        })
        )
    }

    render(){
    return (
        <div className='container-profile'>
            <div className='picture-container'>
                 <img src={userprofile} alt='userprofile' className='picture-profile'/>
                 <div className='back-yellow'><CreateOutlinedIcon/></div>
            </div>
            <div className='h1'>Datos personales</div>
            <div className='form-profile'>
                <div className='form-group'>
                    <label>Nombre</label>
                    <input type='text' className='input-profile' spellCheck='false'/>
                </div>
                <div className='form-group'>
                    <label>Correo electronico</label>
                    <input type='email' className='input-profile' spellCheck='false'/>
                </div>
                <div className='form-group'>
                    <label>Telefono</label>
                    <input type='text' className='input-profile' spellCheck='false'/>
                </div>
                <div className='form-group'><button>Guardar<CreateOutlinedIcon/></button></div>
            </div>

            <div className='h1'>Direcciones de entrega</div>
            <div className='form-profile'>
                <div className='form-group'>
                    <button className='no-bottom'>Añadir direccion de entrega <CreateOutlinedIcon/></button>
                    <label className='view-addres'>Final ex administracion de renta Zacatecoluca</label>
                </div>
            </div>

            <div className='h1'>Acerca de Llevo App</div>
            <div className='form-profile'>
                <div className='form-group'>
                    <button className='about'>Terminos y condiciones</button>
                    <button className='about'>Contactanos</button>
                </div>
            </div>
            <div className='close-sesion'><button onClick={this.Logout}>Cerrar sesion</button></div>
        </div>
    )
    }
}

export default Perfil;