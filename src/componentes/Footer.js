import React, { useState, useEffect } from 'react';
import {Link, useLocation} from 'react-router-dom';
import firebase from 'firebase';
import {ReactComponent as Home} from '../img/icons/footer/home.svg';
import {ReactComponent as Favorite} from '../img/icons/footer/favorite.svg';
import {ReactComponent as Persona} from '../img/icons/footer/persona.svg';
import {ReactComponent as Tienda} from '../img/icons/footer/tienda.svg';
import Face from '../img/icons/footer/facebook.png';
import 'react-responsive-modal/styles.css';
import { createBrowserHistory } from "history";
import { Modal } from 'react-responsive-modal';
import {connect} from 'react-redux';
import datosLogeo from '../store/sesion/action';
import {addsesion} from '../store/sesion/reducer';
import useDatos from '../hooks/useLog';


const History = createBrowserHistory();

const Footer = (props) =>{
    const[loged,datos] = useDatos();
    const[uidlog,setuidlog] = useState();
    let uselocation = useLocation();


    const [data,setDATA] = useState({
        logede:false,
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
        userlog:[],
        img:'',
        load:false
    })

    function onOpenModal(){
        setDATA({ open: true });
    };
     
    function onCloseModal(){
        setDATA({open: false });
    };

    
    function changeValue(e){
        this.setState({
            correo:e.target.value,
        })
    }
    
    function writePass(e){
        setDATA({
            pass:e.target.value,
        })
    }

    function writePassR(e){
        setDATA({
            passR: e.target.value
        })
    }

    function writeCorreoR(e){
        setDATA({
            correoR:e.target.value
        })
    }

    function writeName(e){
        setDATA({
            nombre:e.target.value,
        })
    }

    function writeApellido(e){
        setDATA({
            apellido:e.target.value,
        })
    }

    function writeFecha(e){
        setDATA({
            fechaNacimiento:e.target.value,
        })
    }

    function writeGender(e){
        setDATA({
            sexo:e.target.value,
        })
    }

    function writeTelefono(e){
        setDATA({
            telefono:e.target.value,
        })
    }

    useEffect(()=>{
        login(); 
    },[])




    function viewChange(e){
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

    function loginFB(){
        var provider = new firebase.auth.FacebookAuthProvider();

        provider.setCustomParameters({
            'display': 'popup'
          });

        provider.addScope('public_profile,email,user_photos');

        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var usuariofb = result.user;
           
            localStorage.setItem('token', token);
           
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

    function login(){
         firebase.auth().onAuthStateChanged(async (usuario)=>{
            if(usuario){
                fetch('https://graph.facebook.com/v8.0/'+usuario.providerData[0].uid+'/picture?type=normal&access_token='+localStorage.getItem('token')).then((res)=>{
                    setDATA({
                        userlog:{
                            correo:usuario.email,
                            nombre:usuario.displayName,
                            img:res.url,
                        },
                        load:true,
                        logede:true
                    })
                    setuidlog(usuario.providerData[0].uid)
        
                    
                }) 
            }else{
                setDATA({
                    logede:false,
                    load:false,
                })
            }
        })
    }





        const {open,correo,pass,passR,correoR,nombre,apellido,telefono,fechaNacimiento,logede,load,img,userName,userlog} = data;
    return(
        
        <div className="footer">
            <Modal open={open} onClose={onCloseModal} center>
            <div className="container-login" id='container-login'>
                <div className="card-login">
                    <div className="title-card">
                        <label className="yellow" onClick={viewChange} id="iniciar">INICIAR SESION</label>
                    </div>
                    <div className="input-group recor-group">
                        <span id="notener">No tienes una cuenta?</span>
                        <span onClick={viewChange} id="resgitro">Registrate</span>
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
                        <button onClick={login}>Iniciar</button>
                    </div>
                        <div className="text-midle-button recor-group"><hr></hr><span className='text-midle-text'>o si prefieres</span><hr></hr></div>
                    <div className='button-con-login-fb'>
                        <button onClick={loginFB}><img src={Face}/></button>
                    </div>
                    </div>
                    </div>
                    <div id="register">
                    <div className="form-group-login">
                    <div className="card-login">
                        <div className="wrap">
                            <div className="input-group">
                                <input type="text" className="input-login" placeholder="Nombre" spellCheck='false' value={nombre} onChange={writeName}/>
                            </div>
                            <div className="input-group">
                                <input type="text" className="input-login" spellCheck='false' placeholder="Apellido" value={apellido} onChange={writeApellido}/>
                            </div>
                        </div>
                        <div className="input-group">
                            <input type="email" className="input-login" id='email' placeholder="Correo" value={correoR} onChange={writeCorreoR}/>
                        </div>
                        <div className="input-group">
                            <input type="password" className="input-login" value={passR} placeholder="Contraseña" onChange={writePassR} id="pass"/>
                        </div>
                        <div className="input-group">
                            <input type="text" className="input-login" placeholder="Telefono" vallue={telefono} onChange={writeTelefono}/>
                        </div>
                        <div className="input-group">
                            <input type="date" className="input-login" placeholder="Fecha de nacimiento" value={fechaNacimiento} onChange={writeFecha}/>
                        </div>
                        <div className="input-group">
                                <div className="container-gender">
                                        <div>
                                            <input type="radio" className="gender" name='genero' value='Masculino' defaultChecked id='masculino' onChange={writeGender}/>
                                            <label htmlFor='masculino' className="radio"></label>
                                            <label htmlFor='masculino'>Masculino</label>
                                        </div>
                                        <div>
                                            <input type="radio" className="gender" name='genero' value='Femenino' id="femenino" onChange={writeGender}/>
                                            <label htmlFor='femenino' className="radio"></label>
                                            <label htmlFor='femenino'>Femenino</label>
                                        </div>
                                </div>
                        </div>

                        <div className='button-con-login register'>
                        <button onClick={login}>Registrarme</button>
                    </div>
                        <div className="text-midle-button recor-group"><hr></hr><span className='text-midle-text'>o si prefieres</span><hr></hr></div>
                    <div className='button-con-login-fb'>
                        <button onClick={loginFB}><img src={Face}/></button>
                    </div>

                        </div>
                    
                    </div>
                    
                    </div>
                    </div>
            </Modal>
            <ul>
                <li><Link to={{pathname: '/',state:'hola'}} className="line-link"><Home className={uselocation.pathname === "/"?"yellow":""}/><span className={uselocation.pathname === "/"?"text-info yellow":"text-info"}>INICIO</span></Link></li>
                <li><Link to='/favorito' className='line-link'><Favorite className={uselocation.pathname === "/favorito"?"yellow":""}/><span className={uselocation.pathname === "/favorito"?"text-info yellow":"text-info"}>FAVORITOS</span></Link></li>
                <li><Link to='/Ordenes' className='line-link'><Tienda className={uselocation.pathname === "/Ordenes"?"yellow":""}/><span className={uselocation.pathname === "/Ordenes"?"text-info yellow":"text-info"}>ORDENES</span></Link></li>
                {logede ? <li><Link to='/Logeado'><img src={userlog.img} alt='icon' className='iconuser'/></Link></li> : <li onClick={onOpenModal} className="line-link"><Persona/><span className='text-info' >PERFIL</span></li>}
            </ul>
        </div>
    )
    
}

const mapStateStore = state =>{
    return {
        sesion:addsesion(state)  
    }
  }

export default connect(mapStateStore,{datosLogeo})(Footer);