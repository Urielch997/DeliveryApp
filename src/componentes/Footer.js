import React, { Component } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import {Link} from 'react-router-dom';
import firebase from 'firebase';
import userIcon from '../img/userprofile.png';
import {ReactComponent as ReactLogo} from '../img/icons/footer/home.svg';
import home from '../img/icons/footer/home.svg';
import favorite from '../img/icons/footer/favorite.svg';
import persona from '../img/icons/footer/persona.svg';
import tienda from '../img/icons/footer/tienda.svg';

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
                <li><Link to='/'><ReactLogo/></Link></li>
                <li><img src={favorite}/></li>
                <li><img src={tienda}/></li>
                {this.state.loged ? <li><><Link to='/perfil'><img src={userIcon} alt='icon' className='iconuser'/></Link></></li> : <li><Link to='/login'><img src={persona}/></Link></li>}
            </ul>
        </div>
    )
    }
}

export default Footer;