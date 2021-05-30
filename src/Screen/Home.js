import React, { useEffect, useState } from 'react';
import Cards from '../componentes/Cards';
import Navmidle from '../componentes/Navmidle';
import ListCards from '../componentes/ListCards';
import { selectActiveSearch } from '../store/search/reducer';
import { connect } from 'react-redux';
import useDatos from '../hooks/useLog';
import { createBrowserHistory } from "history";
import { useLocation } from 'react-router-dom';
import useClick from '../hooks/useClick';
import useDataApi from '../hooks/useDataApi';

const History = createBrowserHistory();

const Home = (props) => {
  const [setElegir, seleccionado, elegir] = useClick();
  const [loged, datos] = useDatos();
  const location = useLocation();
  const [state,fetchData] = useDataApi();


  useEffect(()=>{
    fetchData()
  },[])


  return (
    <>
      <div className="title-tex">
        <label>{datos.nombre ? <>Hola{`, ${datos.nombre}`}</> : <>Hola</>}</label>
        <label>¿Que vas a comer hoy?</label>
      </div>
      <Navmidle />
      <div className='container-content'>
        <div className="cards-container">
          <span className='text-info'>PROMOS DE HOY</span>
          <Cards />
        </div>
        <ListCards searchValue={props.search === undefined ? " " : props.search} />
      </div>
    </>
  );
}

const mapStateStore = state => {
  return {
    search: selectActiveSearch(state)
  }
}

export default connect(mapStateStore)(Home);