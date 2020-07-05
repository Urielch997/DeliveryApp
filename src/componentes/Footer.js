import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import {Link} from 'react-router-dom';

const Footer = () =>{
    return(
        <div className="footer">
            <ul>
                <Link to='/'><li><HomeIcon/></li></Link>
                <li><SearchIcon/></li>
                <li>Ordenes</li>
                <Link to='/login'><li><PermIdentityIcon/></li></Link>
            </ul>
        </div>
    )
}

export default Footer;