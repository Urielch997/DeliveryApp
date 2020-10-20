import React, { Component } from 'react';
import {Link,matchPath,useParams } from 'react-router-dom';
import firebase from 'firebase';
import userIcon from '../img/userprofile.png';
import {ReactComponent as Home} from '../img/icons/footer/home.svg';
import {ReactComponent as Favorite} from '../img/icons/footer/favorite.svg';
import {ReactComponent as Persona} from '../img/icons/footer/persona.svg';
import {ReactComponent as Tienda} from '../img/icons/footer/tienda.svg';
import Face from '../img/icons/footer/facebook.png';
import db from '../fireConfig';
import 'react-responsive-modal/styles.css';
import { createBrowserHistory } from "history";
import { Modal } from 'react-responsive-modal';

const History = createBrowserHistory();

class Footer extends Component{
    state = {
        loged:false,
        open:false,
        correo:'',
        pass:'',
        passR:'',
        confirmPass:'',
        correoR:'',
        usuario:'',
        nombre:'',
        apellido:'',
        fechaNacimiento:'',
        telefono:'',
        sexo:'Masculino',
        userlog:[]
    }

    async componentDidMount(){
        this.login()  
    }

    login(){
        firebase.auth().onAuthStateChanged((user)=>{
                if(user){
                    console.log(user)
                   
                    this.setState({
                        loged:true,
                        userlog:{
                            img:user.photoURL
                        }
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

    
    changeValue = (e) => {
        this.setState({
            correo:e.target.value,
        })
    }
    
    writePass = (e) =>{
        this.setState({
            pass:e.target.value,
        })
    }

    writePassR = (e) =>{
        this.setState({
            passR: e.target.value
        })
    }

    writeCorreoR = (e) =>{
        this.setState({
            correoR:e.target.value
        })
    }

    writeName = (e) =>{
        this.setState({
            nombre:e.target.value,
        })
    }

    writeApellido = (e) =>{
        this.setState({
            apellido:e.target.value,
        })
    }

    writeFecha = (e) =>{
        this.setState({
            fechaNacimiento:e.target.value,
        })
    }

    writeGender = (e) =>{
        this.setState({
            sexo:e.target.value,
        })
    }

    writeTelefono = (e) =>{
        this.setState({
            telefono:e.target.value,
        })
    }

    viewChange(e){
        var r = document.getElementById('register');
        var l = document.getElementById('log');
        var ini = document.getElementById('iniciar');
        var res = document.getElementById('resgitro');
        var cont = document.getElementById('container-login');
        var noten = document.getElementById('notener');

        if(l.style.display === 'none' && cont.style.minHeight === '80vh'){
            l.style.display = 'block';
            ini.classList.add('yellow');
            res.classList.remove('yellow');
            ini.innerHTML = 'INICIAR SESION';
            noten.innerHTML = 'No tienes una cuenta?';
            res.innerHTML = 'Registrate';
            r.style.display = 'none';
            cont.style.minHeight = '';

        }else{
            r.style.display = 'block';
            res.classList.add('yellow');
            ini.classList.remove('yellow');
            ini.innerHTML = 'Crear una cuenta!';
            noten.innerHTML = 'ya tienes cuenta?';
            res.innerHTML = 'Iniciar sesion';
            l.style.display = 'none';
            cont.style.minHeight = '80vh';
        }
    }

    logFB(){
        var provider = new firebase.auth.FacebookAuthProvider();

        provider.setCustomParameters({
            'display': 'popup'
          });

        provider.addScope('public_profile,email');

        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        
            
            var token = result.credential.accessToken;
            // The signed-in user info.
            var usuariofb = result.user;

            this.setState({ open: false });

            console.log(usuariofb)
            
    
            
            
           
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            console.log(errorCode)
            var errorMessage = error.message;
            console.log(errorMessage)
            // The email of the user's account used.
            var email = error.email;
            console.log(email)
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            console.log(credential)
            // ...
          });
    }


    render(){
        const {open,correo,pass,passR,correoR,nombre,apellido,telefono,fechaNacimiento} = this.state;
        const {img,userName} = this.state.userlog
    return(
        
        <div className="footer">
            <Modal open={open} onClose={this.onCloseModal} center>
            <div className="container-login" id='container-login'>
                <div className="card-login">
                    <div className="title-card">
                        <label className="yellow" onClick={this.viewChange} id="iniciar">INICIAR SESION</label>
                    </div>
                    <div className="input-group recor-group">
                        <span id="notener">No tienes una cuenta?</span>
                        <span onClick={this.viewChange} id="resgitro">Registrate</span>
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
                            <label className='check-recor' htmlFor='chek'></label>
                            <input type="checkbox" id='chek'/>
                            <span htmlFor='chek'>Recordarme</span>   
                        </div>
                    </div>
                    <div className='button-con-login'>
                        <button onClick={this.login}>Iniciar</button>
                    </div>
                        <div className="text-midle-button recor-group"><hr></hr><span className='text-midle-text'>o si prefieres</span><hr></hr></div>
                    <div className='button-con-login-fb'>
                        <button onClick={this.logFB}><img src={Face}/></button>
                    </div>
                    </div>
                    </div>
                    <div id="register">
                    <div className="form-group-login">
                    <div className="card-login">
                        <div className="wrap">
                            <div className="input-group">
                                <input type="text" className="input-login" placeholder="Nombre" spellCheck='false' value={nombre} onChange={this.writeName}/>
                            </div>
                            <div className="input-group">
                                <input type="text" className="input-login" spellCheck='false' placeholder="Apellido" value={apellido} onChange={this.writeApellido}/>
                            </div>
                        </div>
                        <div className="input-group">
                            <input type="email" className="input-login" id='email' placeholder="Correo" value={correoR} onChange={this.writeCorreoR}/>
                        </div>
                        <div className="input-group">
                            <input type="password" className="input-login" value={passR} placeholder="Contraseña" onChange={this.writePassR} id="pass"/>
                        </div>
                        <div className="input-group">
                            <input type="text" className="input-login" placeholder="Telefono" vallue={telefono} onChange={this.writeTelefono}/>
                        </div>
                        <div className="input-group">
                            <input type="date" className="input-login" placeholder="Fecha de nacimiento" value={fechaNacimiento} onChange={this.writeFecha}/>
                        </div>
                        <div className="input-group">
                                <div className="container-gender">
                                        <div>
                                            <input type="radio" className="gender" name='genero' value='Masculino' defaultChecked id='masculino' onChange={this.writeGender}/>
                                            <label htmlFor='masculino' className="radio"></label>
                                            <label htmlFor='masculino'>Masculino</label>
                                        </div>
                                        <div>
                                            <input type="radio" className="gender" name='genero' value='Femenino' id="femenino" onChange={this.writeGender}/>
                                            <label htmlFor='femenino' className="radio"></label>
                                            <label htmlFor='femenino'>Femenino</label>
                                        </div>
                                </div>
                        </div>

                        <div className='button-con-login register'>
                        <button onClick={this.registerUser}>Registrarme</button>
                    </div>
                        <div className="text-midle-button recor-group"><hr></hr><span className='text-midle-text'>o si prefieres</span><hr></hr></div>
                    <div className='button-con-login-fb'>
                        <button onClick={this.logFB}><img src={Face}/></button>
                    </div>

                        </div>
                    
                    </div>
                    
                    </div>
                    </div>
            </Modal>
            
            <ul>
                <li><Link to='/' className='line-link'><Home className='yellow'/><span className='text-info'>INICIO</span></Link></li>
                <li><Link to='/favorito' className='line-link'><Favorite/><span className='text-info'>FAVORITOS</span></Link></li>
                <li><Link to='/Ordenes' className='line-link'><Tienda/><span className='text-info'>ORDENES</span></Link></li>
                {this.state.loged? <li><Link to='/Logeado'><img src={img} alt='icon' className='iconuser'/></Link></li> : <li onClick={this.onOpenModal}><Persona/><span className='text-info' >PERFIL</span></li>}
            </ul>
        </div>
    )
    }
}

export default Footer;