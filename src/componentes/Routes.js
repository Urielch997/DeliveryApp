import React from 'react';
import {
    Switch,
    Route,
  } from "react-router-dom";
import Home from '../Screen/Home';
import Login from '../Screen/Login';
import Detalles from '../Screen/Detalles';

  const Routes = () =>{
    return(
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/detalles" component={Detalles}/>
                
            </Switch>
    );
  }

  export default Routes;