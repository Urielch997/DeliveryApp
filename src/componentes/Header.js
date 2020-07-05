import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import RoomIcon from '@material-ui/icons/Room';


const Header = () => {
    return(
    <div className="search">
        <div className="container-head">
            <div className="seccion-head">
                <label className="white">Final ex administracion de renta</label><div className="circle-icon"><RoomIcon/></div>
            </div>
            <div className="seccion-head">
                <input type="text" id="search" className="search-input" placeholder="Buscar un comercio"/>
                <div className="circle-icon"><SearchIcon/></div>
            </div>
            
        </div>
    </div>);
}

export default Header;