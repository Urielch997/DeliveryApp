import React,{useState,useEffect} from 'react';
import CardFav from '../componentes/CardFav';
import '../estilos/favoritos.css';
import useDatos from '../hooks/useLog';

const Favorito=({})=>{
    const[loged,datos] = useDatos();


    return(
    <>
        <div className="titulo-fav">
            <h1>Favoritos</h1>
            <span className="text-orange">Comercio que seleccionaste...</span>
        </div>
        <div className="cards-fav-container">
           {loged?<CardFav/>:<div>Para poder visualizar esta seccion debe iniciar sesion</div>}
        </div>
    </>
    )
}

export default Favorito;