import React, { useState ,useEffect} from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Screen/Home";
import { createBrowserHistory } from "history";
import Login from "../Screen/Login";
import Header from "./Header";
import Footer from "./Footer";
import Detalles from "../Screen/Detalles";
import Perfil from "../Screen/Perfil";

const History = createBrowserHistory();

const Routes = (props) => {
  const [searchValue,setSearchValue] = useState();
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
      //console.log(searchValue);
  }, [searchValue]);
  return (
    <>
      <Header handleSearch={handleSearch} />
      <Switch history={History}>
        <Route exact path="/"  component={() => <Home searchValue={searchValue} />} />
        <Route path="/login" component={Login} />
        <Route path="/detalles" component={Detalles} />
        <Route path="/Perfil" component={Perfil} />
      </Switch>
      <Footer isLoged={props.login} />
    </>
  );
};

export default Routes;
