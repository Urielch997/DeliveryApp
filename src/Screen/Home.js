import React, { useState } from 'react';
import Cards from '../componentes/Cards';
import Navmidle from '../componentes/Navmidle';
import ListCards from '../componentes/ListCards';
import {selectActiveSearch} from '../store/search/reducer';
import { connect } from 'react-redux';
import useDatos from '../hooks/useLog';

const Home =(props)=>{
  const [ele,setEle] = useState(false);
  const[loged,datos] = useDatos();

    return(
              <>
                <div className="title-tex">
                        <label>{ datos.nombre ? <>Hola{`, ${datos.nombre}`}</> : <>Hola</>}</label>
                      <label>¿Que vas a comer hoy?</label>
                  </div>
                  <Navmidle/>
                  <div className='container-content'>
                  <div className="cards-container">
                    <span className='text-info'>PROMOS DE HOY</span>
                    <Cards/>
                  </div>
                    <ListCards searchValue={props.search === undefined ? " ": props.search}/>    
                  </div>
              </>     
    );
}

const mapStateStore = state =>{
  return {
    search:selectActiveSearch(state)  
  }
}

export default connect(mapStateStore)(Home);