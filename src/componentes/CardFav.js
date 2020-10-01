import React from 'react';
import logo from '../img/alitas.png';

const CardFav =()=>{
    return(
        <>
        <div className="card-fav">
                <div className="img-fav">
                    <img src={logo} alt='logo'/>
                </div>
                <div className="img-fav text-fav-container">
                    <label className="text-orange">Titulo</label>
                    <label>Categoria</label>
                    <button className="white orange">ver menu.</button>
                </div>
            </div>
        </>
    )
}

export default CardFav;