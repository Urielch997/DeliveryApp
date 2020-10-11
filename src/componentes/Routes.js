import React, { useState ,useEffect} from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Screen/Home";
import { createBrowserHistory } from "history";
import Login from "../Screen/Login";
import Header from "./Header";
import Footer from "./Footer";
import Detalles from "../Screen/Detalles";
import Perfil from "../Screen/Perfil";
import Favorito from "../Screen/Favoritos";
import Ordenes from "../Screen/Ordenes";
import Logeado from '../Screen/Logeado';

const History = createBrowserHistory();

const Routes = (props) => {
  const [searchValue,setSearchValue] = useState();
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };


 
  return (
    <>
      <Header handleSearch={handleSearch} />
      <Switch history={History}>
        <Route exact path="/"  component={() => <Home searchValue={searchValue} />} />
        <Route path="/login" component={Login} />
        <Route path='/favorito' component={Favorito}/>
        <Route path="/detalles" component={Detalles} />
        <Route path="/Perfil" component={Perfil} />
        <Route path="/Ordenes" component={Ordenes} />
        <Route path="/logeado" component={Logeado} />
      </Switch>
      <Footer isLoged={props.login} />
    </>
  );
};

export default Routes;
