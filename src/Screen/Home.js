import React, { useState,useEffect } from 'react';
import Cards from '../componentes/Cards';
import Navmidle from '../componentes/Navmidle';
import ListCards from '../componentes/ListCards';
import firebase from 'firebase';
import db from '../fireConfig';
import Header from '../componentes/Header';

const Home =(props)=>{
    const[value,setValue]=useState();
    const {searchValue} = props;

    return(
            <>
              <div className="title-tex">
                    <label>{ true ? <>Hola{`, uriel`}</> : <>Hola</>}</label>
                  <label>¿Que vas a comer hoy?</label>
              </div>
              <Navmidle/>
              <div className='container-content'>
              <div className="cards-container">
                <span className='text-info'>PROMOS DE HOY</span>
                <Cards/>
              </div>
                <ListCards searchValue={searchValue === undefined ? " ": searchValue}/>    
              </div>
            </>
    );
}

export default Home;