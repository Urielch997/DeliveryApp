import React, { Component } from 'react';
import Cards from '../componentes/Cards';
import Navmidle from '../componentes/Navmidle';
import ListCards from '../componentes/ListCards';
import firebase from 'firebase';
import db from '../fireConfig';




class Home extends Component{
  _isMounted = false;

  state = {
    datosUsuario:[],
    login:false,
    open:false,
  }


  componentDidMount(){
    this._isMounted = true;
      firebase.auth().onAuthStateChanged((user) =>{
         if(user){  
          db.collection('users').doc(user.uid).get().then((snapshot) =>{
            if(this._isMounted){
                  this.setState({
                      datosUsuario:{ ...snapshot.data()},
                      login:true
                  })
                }
              })
            }else{
              if(this._isMounted){
          this.setState({
              login:false,
          })
        }
        
      }
      })
  }


  componentWillUnmount() {
    this._isMounted = false;
  }

  render(){
    const {datosUsuario} = this.state
    return(
            <>
              <div className="title-tex">
                    <label>{ datosUsuario.nombre ? <>Hola{`, ${datosUsuario.nombre}`}</> : <>Hola</>}</label>
                  <label>¿Que vas a comer hoy?</label>
              </div>
              <Navmidle/>
              <div className='container-content'>
              <div className="cards-container">
                <span className='text-info'>PROMOS DE HOY</span>
                <Cards/>
              </div>
                <ListCards searchValue={this.props.searchValue === undefined ? " ": this.props.searchValue}/>    
              </div>
            </>
    );
  }
}

export default Home;