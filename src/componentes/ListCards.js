import React, { Component } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Link} from 'react-router-dom';
import db from '../fireConfig';

class ListCards extends Component{

    state = {
        img:[],
        items:[],
        loading:false,
    }
    
    componentDidMount(){
        this.getData();
    }

    getData() {
        db.collection('imagenes').get().then(snapshot =>{
            this.setState({
                img:snapshot.docs.map(data =>{
                    return{id:data.id,nombre:data.data().nombre,url:data.data().url,restaurante:data.data().restaurante,horario:data.data().horario}
                })
            })
        }).then(()=>{
            this.setState({
                loading:true
            })
        })
    }

    getHoras(hora){
        var h;
        if(hora>=12){
           h  = hora-12;
        }
        if(hora == 0){
            h = 12;
        }
        return(h)
    }


    listtarget = () => (
        this.state.img.map((datos) =>{
            const hora = (new Date()).getHours();
            const apertura = datos.horario[0].substr(0,2);
            const cierre = datos.horario[1].substr(0,2);
            console.log(parseInt(hora) >= apertura && parseInt(hora) <= cierre)
            return(
            <div className="cards-list" key={datos.id}>
            <Link to={{     
         pathname: '/detalles',
         state:datos
        }}>
                <div className="card-img">
                {parseInt(hora) >= apertura && parseInt(hora) <= cierre ? '' : <div className='close'><label>CERRADO</label></div>}
                        <img src={datos.url} alt='Imagen' className='card-image'/>
                    <div className="love"><FavoriteIcon/></div>
                </div>
    <div className="text-card-footer"><span>{datos.restaurante}</span><span className="active">{parseInt(hora) >= apertura && parseInt(hora) <= cierre? 'Abierto' : 'Cerrado'}</span></div>
            </Link>
        </div>
            )  
        })
    )
    
    
    
    render(){ 
        const {loading} = this.state;
    return(
        <div className='ListCard-container center'>
                {loading ? this.listtarget():<div className="box"><CircularProgress classes={{svg:'red'}}/></div>}
        </div>
    )
}   
}

export default ListCards;