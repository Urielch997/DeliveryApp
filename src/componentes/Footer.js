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

class Footer extends Component{
    state = {
        loged:false,
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


    render(){
    return(
        <div className="footer">
            <ul>
                <li><Link to='/' className='line-link'><Home className='yellow'/><span className='text-info'>INICIO</span></Link></li>
                <li><Favorite/><span className='text-info'>FAVORITOS</span></li>
                <li><Tienda/><span className='text-info'>ORDENES</span></li>
                {this.state.loged ? <li><><Link to='/perfil' className='line-link'><img src={userIcon} alt='icon' className='iconuser'/></Link></></li> : <li><Link to='/login' className='line-link'><Persona/><span className='text-info'>PERFIL</span></Link></li>}
            </ul>
        </div>
    )
    }
}

export default Footer;