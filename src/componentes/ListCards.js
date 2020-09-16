import React, { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from "react-router-dom";
import db from "../fireConfig";
import useSearch from "../hooks/useSearch";
import { getAllByDisplayValue } from "@testing-library/react";


const ListCards = (props) => {
  const [filteredData, setSearch, setSourceData] = useSearch();
  const [img, setImg] = useState([]);
  const [items, setItems] = useState([]);
  const [loading, setLoadig] = useState();

  const addData = () => {
    setSearch(props.searchValue);
    setSourceData(img);
  };
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
        setLoadig(true);
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
  useEffect(() => {
    getRestaurantes();
  }, []);

  useEffect(() => {
    addData();
  }, [img]);

  useEffect(() => {
    addData();
  }, [filteredData]);

  return (
    <div className="center">
      
      <div className="ListCard-container ">
        {loading ? (
          filteredData.map((datos) => {
            const hora = new Date().getHours();
            const apertura = datos.horario[0].substr(0, 2);
            const cierre = datos.horario[1].substr(0, 2);
            return (
              <div className="cards-list" key={datos.id}>
                <Link
                  to={{
                    pathname: "/detalles",
                    state: datos,
                  }}
                >
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
                </Link>
              </div>
            );
          })
        ) : (
          <div className="box">
            <CircularProgress classes={{ svg: "red" }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ListCards;
