import React from 'react';
import CardFav from '../componentes/CardFav';
import '../estilos/favoritos.css';

const Favorito=({})=>{
    return(
    <>
        <div className="titulo-fav">
            <h1>Favoritos</h1>
            <span className="text-orange">Comercio que seleccionaste...</span>
        </div>
        <div className="cards-fav-container">
            <CardFav/>
            <CardFav/>
            <CardFav/>
            <CardFav/>
        </div>
    </>
    )
}

export default Favorito;