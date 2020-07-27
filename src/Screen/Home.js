import React, { Component } from 'react';
import Cards from '../componentes/Cards';
import Navmidle from '../componentes/Navmidle';
import ListCards from '../componentes/ListCards';
import firebase from 'firebase';
import db from '../fireConfig';


class Home extends Component{
  _isMounted = false;

  state = {

    banner:[],
    datosUsuario:[],
    login:false,
  }

  componentDidMount(){
    console.log(this.props.searchValue);
    this._isMounted = true;
    this.getData()
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

  getData = () =>{
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
                <ListCards searchValue={this.props.searchValue === undefined ? " ": this.props.searchValue}/>   
              </div>  
            </>
    );
  }
}

export default Home;