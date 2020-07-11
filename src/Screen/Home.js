import React, { Component } from 'react';
import Cards from '../componentes/Cards';
import Navmidle from '../componentes/Navmidle';
import ListCards from '../componentes/ListCards';
import db from '../fireConfig';


class Home extends Component{
  
  state = {
    banner:[],
  }

  componentDidMount(){
    this.getData()
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
    const {banner} = this.state
    return(
            <>
              <div className="title-tex">
                  <label  className='title'>Hola,Roberto </label>
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