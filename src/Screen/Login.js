import React, {Component} from 'react';
import '../estilos/login.css';
import db from '../fireConfig';
import firebase from 'firebase';

class Login extends Component{
    constructor(){
        super()
        this.state ={
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
        }
    }

    registerUser = () =>{
        const history = this.props.history;
        const {nombre,apellido,fechaNacimiento,telefono,sexo,correoR,passR} = this.state;
        firebase.auth().createUserWithEmailAndPassword(correoR,passR).then((success)=>{
            firebase.auth().signInWithEmailAndPassword(correoR,passR).then(()=>{
            let user = firebase.auth().currentUser;
            var uid;
            if(user != null){
                uid = user.uid;
            };
            const datosUser = {
                nombre:nombre,
                apellido:apellido,
                fechaNacimiento:fechaNacimiento,
                telefono:telefono,
                genero:sexo,
                correo:correoR,
                password:passR
            }
            db.collection('users').doc(uid).set(datosUser).then((snapshot)=>{
                history.push('/')
            })
        })
            /** */
        }).catch((error)=>{
            console.log(error.message)
        })
    }

    login = () =>{
       return new Promise((resolve, reject) => {
            const history = this.props.history;
            const {correo,pass} = this.state;
            firebase.auth().signInWithEmailAndPassword(correo,pass).then((success)=>{
                db.collection('users').doc(success.user.uid).get().then((snapshot)=>{
                    history.push('/');
                    resolve(success)
                })
                
            })
        })
    }



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

        if(l.style.display === 'none' && cont.style.minHeight === '100vh'){
            l.style.display = 'block';
            ini.classList.add('yellow');
            res.classList.remove('yellow');
            r.style.display = 'none';
            cont.style.minHeight = '';

        }else{
            r.style.display = 'block';
            res.classList.add('yellow');
            ini.classList.remove('yellow');
            l.style.display = 'none';
            cont.style.minHeight = '100vh';
        }
    }

    render(){
        const {correo,pass,passR,correoR,nombre,apellido,telefono,fechaNacimiento} = this.state;
        return(
            <div className="container-login" id='container-login'>
                <div className="title-login">
                        <label className="h1">¿No tienes cuenta?</label>
                        <label className="middle-text-log">Crea una y empieza a ordenar</label>
                    </div>
                <div className="card-login">
                    <div className="title-card">
                        <label className="yellow" onClick={this.viewChange} id="iniciar">INICIAR SESION</label>
                        <label onClick={this.viewChange} id="resgitro">REGISTRARME</label>
                    </div>
                    <div id="log">
                    <div className="form-group-login">
                        <div className="input-group">
                            <label>Correo</label>
                            <input type="email" className="input-login" value={correo} onChange={this.changeValue}/>
                        </div>
                        <div className="input-group">
                            <label>Contraseña</label>
                            <input type="password" className="input-login" value={pass} onChange={this.writePass} />
                        </div>
                    </div>
                    <div className='button-con'>
                        <button onClick={this.login}>Iniciar</button>
                    </div>
                    
                    </div>

                    <div id="register">
                    <div className="form-group-login">
                        <div className="input-group">
                            <label>Nombre</label>
                            <input type="text" className="input-login" spellCheck='false' value={nombre} onChange={this.writeName}/>
                        </div>
                        <div className="input-group">
                            <label>Apellido</label>
                            <input type="text" className="input-login" spellCheck='false' value={apellido} onChange={this.writeApellido}/>
                        </div>
                        <div className="input-group">
                            <label>Email</label>
                            <input type="email" className="input-login" id='email' value={correoR} onChange={this.writeCorreoR}/>
                        </div>
                        <div className="input-group">
                            <label>Pasword</label>
                            <input type="password" className="input-login" value={passR} onChange={this.writePassR} id="pass"/>
                        </div>
                        <div className="input-group">
                            <label>Telefono</label>
                            <input type="text" className="input-login" vallue={telefono} onChange={this.writeTelefono}/>
                        </div>
                        <div className="input-group">
                            <label>Fecha de nacimiento</label>
                            <input type="date" className="input-login" value={fechaNacimiento} onChange={this.writeFecha}/>
                        </div>
                        <div className="input-group">
                            <label>Sexo</label>
                                <div className="container-gender">
                                        <div>
                                            <input type="radio" className="gender" name='genero' value='Masculino' defaultChecked id='masculino' onChange={this.writeGender}/>
                                            <label htmlFor='masculino' className="radio"></label>
                                            <span htmlFor='masculino'>Masculino</span>
                                        </div>
                                        <div>
                                            <input type="radio" className="gender" name='genero' value='Femenino' id="femenino" onChange={this.writeGender}/>
                                            <label htmlFor='femenino' className="radio"></label>
                                            <span htmlFor='femenino'>Femenino</span>
                                        </div>
                                </div>
                        </div>
                    </div>
                        <div className='button-con'>
                            <button onClick={this.registerUser}>Registrar</button>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Login;