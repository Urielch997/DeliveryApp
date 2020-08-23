import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';


const Header = (props) => {
  const { handleSearch } = props;
  return (
    <div className="search">
      <div className="container-head">
        <div className="seccion-head">
          <label>Final ex administracion de renta</label>
          <div className="circle-icon">
            <LocationOnOutlinedIcon />
          </div>
        </div>
        <div className="seccion-head">
          <input
            type="text"
            id="search"
            onChange={handleSearch}
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
