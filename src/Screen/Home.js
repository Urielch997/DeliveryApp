import React, { Component } from 'react';
import Cards from '../componentes/Cards';
import Navmidle from '../componentes/Navmidle';
import ListCards from '../componentes/ListCards';


class Home extends Component{
  


  render(){
    return(
            <div>
              <div className="title-tex">
                  <label  className='title'>Hola,Roberto </label>
                  <label className="middle-text">¿Que vas a comer hoy?</label>
              </div>

            <div className="cards-container">
                <Cards/>
                <Cards/>
              </div>
              <Navmidle/>
              <div className="ListCard-container">
              <ListCards/>   
              </div>  
            </div>
    );
  }
}

export default Home;