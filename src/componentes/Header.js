import React,{useEffect, useRef, useState} from "react";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import { Modal } from 'react-responsive-modal';
import Map from '../componentes/Map';
import handler from '../store/search/action';
import { connect } from 'react-redux';
import useDatos from '../hooks/useLog';

const Header = ({handler}) => {
  const [open,setOpen] = useState(false);
  const[loged,datos,data] = useDatos();
  const[direccion,setDireccion] = useState(datos); 

  function onOpenModal(){
    setOpen(true);
  };
 
  function onCloseModal(){
    setOpen(false);
  };


  return (
    
    <div className="search" id='search-cont'>
      <Modal open={open} onClose={onCloseModal} center>
          <Map/>
      </Modal>
      <div className="container-head">
        <div className="seccion-head" onClick={onOpenModal}>
  <label>{datos.direccion?datos.direccion:"Seleccione una direccion"}</label>
          <div className="circle-icon">
            <LocationOnOutlinedIcon />
            {console.log(datos)}
          </div>
        </div>
        <div className="seccion-head">
          <input
            type="text"
            id="search"
            onKeyUp={(e)=>{handler(e.target.value)}}
            className="search-input"
            placeholder="Buscar un comercio"
          />
          <div className="search-icon">
            <SearchIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null,{handler})(Header);
