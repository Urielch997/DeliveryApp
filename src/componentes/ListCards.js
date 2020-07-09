import React, { Component } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {Link} from 'react-router-dom';
import db from '../fireConfig';

class ListCards extends Component{

    state = {
        img:[],
    }
    
    componentDidMount(){
        this.getData();
    }

    getData() {
        db.collection('imagenes').get().then(snapshot =>{
            this.setState({
                img:snapshot.docs.map(data =>{
                    return{nombre:data.data().nombre,url:data.data().url,restaurante:data.data().restaurante}
                })
            })
        })
    }



    listtarget = ({img}) => (
        img.map((datos,key) =>{
            return(
            <div className="cards-list" key={key}>
            <Link to='/detalles'>
                <div className="card-img">
                        <img src={datos.url} alt='Imagen' className='card-image'/>
                    <div className="love"><FavoriteIcon/></div>
                </div>
            <div className="text-card-footer"><span>{datos.restaurante}</span><span className="active">Abierto</span></div>
            </Link>
        </div>
            )  
        })
    )
        
    
    render(){ 
        const img = this.state; 
    return(
        <div className='ListCard-container'>
            {img ? this.listtarget(img) : 'Cargando'}
        </div>
    )
}   
}

export default ListCards;