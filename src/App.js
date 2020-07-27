import React, { Component } from "react";
import Routes from "./componentes/Routes";
import firebase from "firebase";
import "./App.css";

class App extends Component {
  state = {
    login: false,
  };
  componentDidMount() {
    this.isLoged();
  }

  isLoged() {
    firebase.auth().onAuthStateChanged((user) => {
      user
        ? this.setState({
            login: true,
          })
        : this.setState({
            login: false,
          });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container" id="container">
          <Routes isLoged={this.state.login} />
        </div>
      </div>
    );
  }
}

export default App;
