import React from 'react';
import logo from '../img/pizza.png'
const CardsDetail = () => {
    return(
        <div className="cards-detail">
            <div className="menu-img"><img src={logo} alt="pizza"/></div>
            <div className="text-menu">
                <span className="title-menu">Super Cheese de peperoni</span>
                <br/>
                <label className="description-text">Deliciosa pizza grande de queso y peperoni</label>
                <br/>
                <span className="yellow">$8.25</span>
            </div>
        </div>
    );
}

export default CardsDetail;