import React from 'react';
import {
    Switch,
    Route,
  } from "react-router-dom";
import Home from '../Screen/Home';
import {createBrowserHistory} from 'history';
import Login from '../Screen/Login';
import Detalles from '../Screen/Detalles';
import Perfil from '../Screen/Perfil';

const History = createBrowserHistory();

const Routes = () =>{
    return(
            <Switch history={History}>
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/detalles" component={Detalles}/>
                <Route path="/Perfil" component={Perfil}/>
            </Switch>
    );
  }

  export default Routes;