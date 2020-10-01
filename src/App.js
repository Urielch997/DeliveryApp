import React, { Component } from "react";
import Routes from "./componentes/Routes";
import firebase from "firebase";
import "./App.css";

class App extends Component {


  render() {
    return (
      <div className="App">
        <div className="container" id="container">
          <Routes />
        </div>
      </div>
    );
  }
}

export default App;
