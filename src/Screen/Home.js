import React, { Component } from 'react';
import Cards from '../componentes/Cards';
import Navmidle from '../componentes/Navmidle';
import ListCards from '../componentes/ListCards';
import db from '../fireConfig';


class Home extends Component{

  state = {}
  

  componentDidMount(){
    db.collection('users').get().then((datos) => {
      this.setState({
        usuarios:datos.docs.map(doc =>{
          return {id:doc.id,nombre:doc.data()}
        })
        })
    }, error =>{
      console.log(error)
    })
  }

  render(){
    return(
            <div>
              <div className="title-tex">
                  <label  className='title'>Hola,Roberto </label>
                  <label className="middle-text">¿Que vas a comer hoy?</label>
              </div>

            <div className="cards-container">
                <Cards/>
                <Cards/>
              </div>
              <Navmidle/>
              <div className="ListCard-container">
                <ListCards/>
                <ListCards/>
                <ListCards/>
                <ListCards/>
                <ListCards/>
                <ListCards/>
                <ListCards/>
                <ListCards/>
              </div>  
            </div>
    );
  }
}

export default Home;