import React, { useState, useEffect } from "react";
import Skeleton from 'react-loading-skeleton';
import db from "../fireConfig";
import useSearch from "../hooks/useSearch";
import useClick from "../hooks/useClick";
import Detalles from "../Screen/Detalles";

const ListCards = (props) => {
  const [setElegir,seleccionado,elegir] = useClick();
  const [filteredData, setSearch, setSourceData] = useSearch();
  const [img, setImg] = useState([]);
  const [loading, setLoading] = useState(false);


  const getRestaurantes = () => {
    db.collection("imagenes")
      .get()
      .then((snapshot) => {
        setImg(
          snapshot.docs.map((data) => {
            return {
              id: data.id,
              nombre: data.data().nombre,
              url: data.data().url,
              restaurante: data.data().restaurante,
              horario: data.data().horario,
            };
          })
        );
      })
      .then(() => {
        setLoading(true);
      });
  };
  const getHoras = (hora) => {
    var h;
    if (hora >= 12) {
      h = hora - 12;
    }
    if (parseInt(hora) === 0) {
      h = 12;
    }
    return h;
  };

  useEffect(()=>{
    getRestaurantes();   
  },[])

 useEffect(() => {
  setSearch(props.searchValue);
  setSourceData(img);
  
  }, [img]);

  useEffect(() => {
    setSearch(props.searchValue);
  }, [props.searchValue]);

  return (
    
    <div className="center">
      
      <div className="ListCard-container ">
        {seleccionado?<Detalles props={elegir}/>:<>{loading ? (
          filteredData.map((datos) => {
            const hora = new Date().getHours();
            const apertura = datos.horario[0].substr(0, 2);
            const cierre = datos.horario[1].substr(0, 2);
            return (
              
              <div className="cards-list" key={datos.id} onClick={()=>{setElegir(datos)}}>
                  <div className="card-img">
                    {parseInt(hora) >= apertura && parseInt(hora) < cierre ? (
                      ""
                    ) : (
                      <div className="close">
                        <label>CERRADO</label>
                      </div>
                    )}
                    <img src={datos.url} alt="Imagen" className="card-image" />
                  </div>
                  <div className="text-card-footer">
                    <span>{datos.restaurante}</span>
                    <span className="active">
                      {parseInt(hora) >= apertura && parseInt(hora) <= cierre
                        ? "Abierto"
                        : "Cerrado"}
                    </span>
                  </div>
              </div>
            );
          })
        ) : (
        <>
        <div className="cards-list">
          <div className="skeleton">
            <Skeleton height={155}/>
          </div>
    </div>
          <div className="cards-list">
          <div className="skeleton">
            <Skeleton height={155}/>
          </div>
    </div>
    </>
        )}</>}
        
      </div>
    </div>
  );
};

export default ListCards;
