import React, { Component } from 'react';
import Cards from '../componentes/Cards';
import Navmidle from '../componentes/Navmidle';
import ListCards from '../componentes/ListCards';
import firebase from 'firebase';
import db from '../fireConfig';


class Home extends Component{
  
  state = {
    banner:[],
    datosUsuario:[],
    login:false,
  }

  async componentDidMount(){
    this.getData()
      firebase.auth().onAuthStateChanged((user) =>{
          user ? 
          db.collection('users').doc(user.uid).get().then((snapshot) =>{
                  this.setState({
                      datosUsuario:{ ...snapshot.data()},
                      login:true
                  })
              })
          :
          this.setState({
              login:false,
          })
      })
  }

  getData(){
    db.collection('banner').get().then(snapshot =>{
      this.setState({
        banner:snapshot.docs.map(data=>{
          return{url:data.data().url}
        })
      })
    })
  }

  render(){
    const {banner,datosUsuario} = this.state
    return(
            <>
              <div className="title-tex">
    <label  className='title'>{ datosUsuario.nombre ? <>Hola{`, ${datosUsuario.nombre}`}</> : <>Hola</>}</label>
                  <label className="middle-text">¿Que vas a comer hoy?</label>
              </div>

            <div className="cards-container">
                <Cards url={banner}/>
              </div>
              <Navmidle/>
              <div className="ListCard-container">
                <ListCards/>   
              </div>  
            </>
    );
  }
}

export default Home;