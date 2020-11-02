import React,{useState} from "react";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import { Modal } from 'react-responsive-modal';
import Map from '../componentes/Map';
import handler from '../store/search/action';
import { connect } from 'react-redux';

const Header = ({handler}) => {
  const [open,setOpen] = useState(false);

  function onOpenModal(){
    setOpen(true);
  };
 
  function onCloseModal(){
    setOpen(false);
  };

 onscroll=()=>{
    var yScroll=document.documentElement.scrollTop+document.body.scrollTop;
    var ancho = window.innerWidth;
    if(yScroll>0 && ancho > 1024){
      document.getElementById('search-cont').style = 'box-shadow: 0.5px 0.5px 7px rgba(0,0,0, 0.1);';
    }else if(yScroll===0 && ancho > 1024){
      document.getElementById('search-cont').style = 'box-shadow: 0.5px 0.5px 7px rgba(0,0,0, 0);';
    }
  }




  return (
    
    <div className="search" id='search-cont'>
      <Modal open={open} onClose={onCloseModal} center>
          <Map/>
          <button className="btn-confirm"><LocationOnOutlinedIcon />Confirmar direccion</button>
      </Modal>
      <div className="container-head">
        <div className="seccion-head" onClick={onOpenModal}>
          <label>Final ex administracion de rentas</label>
          <div className="circle-icon">
            <LocationOnOutlinedIcon />
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
