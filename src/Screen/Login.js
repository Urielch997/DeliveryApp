import React, {Component} from 'react';
import '../estilos/login.css';
import db from '../fireConfig';

class Login extends Component{
    constructor(){
        super()
        this.state ={
            correo:'',
            pass:'',
        }
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

    action = () =>{
        const {correo,pass} = this.state;
        db.collection('users').add({
            correo:correo,
            pass:pass,
        }).then(()=>{
            console.log('Agregado')
        }).catch(()=>{
            console.log('error')
        })
    }

    viewChange(e){
        var r = document.getElementById('register');
        var l = document.getElementById('log');
        var ini = document.getElementById('iniciar');
        var res = document.getElementById('resgitro');

        if(l.style.display === 'none'){
            l.style.display = 'block';
            ini.classList.add('yellow');
            res.classList.remove('yellow');
            r.style.display = 'none';
        }else{
            r.style.display = 'block';
            res.classList.add('yellow');
            ini.classList.remove('yellow');
            l.style.display = 'none';
        }
    }

    render(){
        const {correo,pass} = this.state;
        return(
            <div className="container-login">
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
                    <div className="form-group">
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
                        <button onClick={this.action}>Iniciar</button>
                    </div>
                    </div>

                    <div id="register">
                    <div className="form-group">
                        <div className="input-group">
                            <label>Nombre</label>
                            <input type="email" className="input-login"/>
                        </div>
                        <div className="input-group">
                            <label>Apellido</label>
                            <input type="password" className="input-login"/>
                        </div>
                        <div className="input-group">
                            <label>Telefono</label>
                            <input type="password" className="input-login"/>
                        </div>
                        <div className="input-group">
                            <label>Fecha de nacimiento</label>
                            <input type="password" className="input-login"/>
                        </div>
                        <div className="input-group">
                            <label>Sexo</label>
                            <input type="password" className="input-login"/>
                        </div>
                    </div>
                        <div className='button-con'>
                            <button onClick={this.action}>Iniciar</button>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Login;