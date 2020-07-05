import React from 'react';
import logo from '../img/cesar.jpg';
import '../estilos/detalles.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarIcon from '@material-ui/icons/Star';
import CardsDetail from '../componentes/CardsDetail';

const Detalles = () =>{
    return(
        <div className="container-detalles">
            <div className="img-box">
                <img src={logo} alt='logo'/>
            </div>
            <div className="title-detail">
                <div className="title-detail-text-container">
                    <label className="title-detail-text">Little Caesars - Zacatecoluca</label><FavoriteIcon/>
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
                <span>10:30am/ 8:00pm</span>
            </div>
            <div className="options-detail">
                <ul className="list-detail">
                    <li className='active'>Pizzas</li>
                    <li>Combos</li>
                    <li>Bebidas</li>
                    <li>Acompañamientos</li>
                </ul>
                <CardsDetail/>
                <CardsDetail/>
                <CardsDetail/>
                <CardsDetail/>
                <CardsDetail/>
            </div>
            
        </div>
    );
} 

export default Detalles;