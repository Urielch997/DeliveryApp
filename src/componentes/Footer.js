import React, { Component } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import {Link} from 'react-router-dom';
import firebase from 'firebase';


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
                <Link to='/'><li><HomeIcon/></li></Link>
                <li><SearchIcon/></li>
                <li>Ordenes</li>
                {this.state.loged ? <Link to='/perfil'><li><PermIdentityIcon/></li></Link> : <Link to='/login'><li><PermIdentityIcon/></li></Link>}
            </ul>
        </div>
    )
    }
}

export default Footer;