import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';


const Header = (props) => {
  const { handleSearch } = props;

 onscroll=()=>{
    var yScroll=document.documentElement.scrollTop+document.body.scrollTop;
    var ancho = window.innerWidth;
    if(yScroll>0 && ancho > 1024){
      document.getElementById('search-cont').style = 'box-shadow: 0.5px 0.5px 7px rgba(0,0,0, 0.1);';
    }else if(yScroll==0 && ancho > 1024){
      document.getElementById('search-cont').style = 'box-shadow: 0.5px 0.5px 7px rgba(0,0,0, 0);';
    }
  }

  return (
    <div className="search" id='search-cont'>
      <div className="container-head">
        <div className="seccion-head">
          <label>Final ex administracion de rentas</label>
          <div className="circle-icon">
            <LocationOnOutlinedIcon />
          </div>
        </div>
        <div className="seccion-head">
          <input
            type="text"
            id="search"
            onKeyUp={handleSearch}
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

export default Header;
