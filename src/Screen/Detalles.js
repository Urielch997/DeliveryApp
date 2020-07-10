import React from 'react';
import '../estilos/detalles.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarIcon from '@material-ui/icons/Star';
import CardsDetail from '../componentes/CardsDetail';
import {useLocation} from 'react-router-dom';

const Detalles = () =>{

    const {url,restaurante,id} = useLocation().state

    return(
        
        <div className="container-detalles">
            <div className="img-box">
                <img src={url} alt='logo'/>
            </div>
            <div className="title-detail">
                <div className="title-detail-text-container">
                    <label className="title-detail-text">{restaurante}</label><FavoriteIcon/>
                </div>
                <span>Pizza</span>
                <div className="seccion-detail">
                    <span>HORARIO</span>
                    <div>
                        <StarIcon/>
                        <StarIcon/>
                        <StarIcon/>
                        <StarIcon/>
                        <StarIcon/>
                    </div>
                </div>
                <span>10:00</span>
            </div>
            <div className="options-detail">
                <ul className="list-detail">
                    <li className='active'>Pizzas</li>
                    <li>Combos</li>
                    <li>Bebidas</li>
                    <li>Acompañamientos</li>
                </ul>
                <CardsDetail item={id}/>
            </div>
            
        </div>
    )
} 

export default Detalles;