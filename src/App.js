import React, { Component } from 'react';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Routes from './componentes/Routes';
import firebase from 'firebase';
import './App.css';

class App extends Component {

    state = {
      login:false,
    }

    componentDidMount(){
      this.isLoged();
    }

   isLoged(){
      firebase.auth().onAuthStateChanged((user) =>{
      user ?
          this.setState({
            login:true,
          })
      :
        this.setState({
          login:false,
        })
      
    })
  }

  render(){
    return (
      <div className="App">
          <div className="container" id='container'>
            <Header/>
            <Routes/>
            <Footer isLoged={this.state.login}/>
          </div>
          
      </div>
      
    )
  }
}

export default App;
