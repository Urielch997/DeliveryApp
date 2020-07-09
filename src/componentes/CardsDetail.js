import React, { Component } from 'react';
import db from '../fireConfig';
import { CircularProgress } from '@material-ui/core';


class CardsDetail extends Component {

        state = {
            id:this.props.item,
            items:[],
            loader:false
        }

    componentDidMount(){
        this.getData()
    }
    

    getData(){
        db.collection('imagenes').doc(this.state.id).collection('items').get().then(snapshot =>{
            this.setState({
                items:snapshot.docs.map(data =>{
                    return{
                        descipcion:data.data().descripcion,
                        nombre:data.data().nombre,
                        precio:data.data().precio,
                        titulo:data.data().titulo,
                        url:data.data().url
                    }
                })
            })
        }).then(()=>{
            this.setState({
                loader:true
            })
        })
    }

    listCards = () =>(
        this.state.items.map((data,key) =>{
            return(
                <div className="cards-detail" key={key}>
                    <div className="menu-img"><img src={data.url} alt="pizza"/></div>
                    <div className="text-menu">
                        <span className="title-menu">{data.nombre}</span>
                        <br/>
                        <label className="description-text">{data.descipcion}</label>
                        <br/>
            <span className="yellow">{`$${data.precio}`}</span>
                    </div>
                </div>
            )
        })
    )

    render(){
        const {loader} = this.state;
        return(
            <>
                {loader ? this.listCards() : <CircularProgress classes={{svg:'red'}}/>}
            </>
            
        )
    }
}

export default CardsDetail;