import React, { Component } from 'react';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Routes from './componentes/Routes';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
          <div className="container" id='container'>
            <Header/>
            <Routes/>
            <Footer/>
          </div>
          
      </div>
      
    )
  }
}

export default App;
