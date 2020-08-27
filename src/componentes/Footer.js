import React, { Component } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import {Link} from 'react-router-dom';
import firebase from 'firebase';
import userIcon from '../img/userprofile.png';
import {ReactComponent as Home} from '../img/icons/footer/home.svg';
import {ReactComponent as Favorite} from '../img/icons/footer/favorite.svg';
import {ReactComponent as Persona} from '../img/icons/footer/persona.svg';
import {ReactComponent as Tienda} from '../img/icons/footer/tienda.svg';
import Face from '../img/icons/footer/facebook.png';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

class Footer extends Component{
    state = {
        loged:false,
        open:false
    }

    async componentDidMount(){
        this.login();
    }

    login(){
        firebase.auth().onAuthStateChanged((user)=>{
            console.log(user)
                if(user){
                    this.setState({
                        loged:true,
                    })
                }else{
                    this.setState({
                        loged:false,
                    })
                }
        })
    }
    
    onOpenModal = () => {
        this.setState({ open: true });
    };
     
    onCloseModal = () => {
        this.setState({ open: false });
    };

    render(){
        const {open} = this.state;
    return(
        <div className="footer">
            <Modal open={open} onClose={this.onCloseModal} center>
            <div className="container-login" id='container-login'>
                <div className="card-login">
                    <div className="title-card">
                        <label id="iniciar">INICIAR SESION</label>
                    </div>
                    <div className="input-group recor-group">
                        <span>No tienes una cuenta?</span>
                        <span className='yellow'>Registrate</span>
                    </div>
                    <div id="log">
                    <div className="form-group-login">
                        <div className="input-group"> 
                            <input type="email" className="input-login" placeholder='Correo'/>
                        </div>
                        <div className="input-group">
                            <input type="password" className="input-login" placeholder='Contraseña'/>
                        </div>
                        <div className="input-group recor-group">
                            <label className='check-recor' for='chek'></label>
                            <input type="checkbox" id='chek'/>
                            <span>Recordarme</span>   
                        </div>
                    </div>
                    <div className='button-con-login'>
                        <button onClick={this.login}>Iniciar</button>
                    </div>
                        <div className="text-midle-button recor-group"><hr></hr><span className='text-midle-text'>o si prefieres</span><hr></hr></div>
                    <div className='button-con-login-fb'>
                        <button onClick={this.login}><img src={Face}/></button>
                    </div>
                    </div>
                    </div>
                    </div>
            </Modal>
            <ul>
                <li><Link to='/' className='line-link'><Home className='yellow'/><span className='text-info'>INICIO</span></Link></li>
                <li><Favorite/><span className='text-info'>FAVORITOS</span></li>
                <li><Tienda/><span className='text-info'>ORDENES</span></li>
                {this.state.loged ? <li><><img src={userIcon} alt='icon' className='iconuser' onClick={this.onOpenModal}/></></li> : <li><Persona onClick={this.onOpenModal}/><span className='text-info' >PERFIL</span></li>}
            </ul>
        </div>
    )
    }
}

export default Footer;