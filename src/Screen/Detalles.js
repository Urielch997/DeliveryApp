import React,{useState} from 'react';
import '../estilos/detalles.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarIcon from '@material-ui/icons/Star';
import CardsDetail from '../componentes/CardsDetail';
import {useLocation} from 'react-router-dom';
import {addFav} from '../hooks/useUpdateInfo';
import { Modal } from 'react-responsive-modal';

const Detalles = (props) =>{
    const [modal,setModal] = useState({
        open:false,
    });
        function hora(hora){
        var time = parseInt(hora.substr(0,2));
        var h;
        if(time>12){
            h = '0' + (time - 12) + ':00 PM';
        }else{
            h ='0' + time + ':00 AM';
        }

        return h;
    }

    const closeModal = () =>{
        setModal({open:false})
    }

    const {url,restaurante,id,horario} = props.props;
    return(
        <div className="container-detalles">
            <div className="img-box">
                <img src={url} alt='logo'/>
            </div>
            <div className="title-detail">
                <div className="title-detail-text-container">
                    <label className="title-detail-text">{restaurante}</label><FavoriteIcon onClick={()=>{addFav(props.props) === 1? setModal({open:true}):setModal({open:false})}}/>
                </div>
                <span>Pizza</span>
                <div className="seccion-detail">
                    <span>HORARIO</span>
                    <div>
                        <StarIcon/>
                        <StarIcon/>
                        <StarIcon/>
                        <StarIcon/>
                        <StarIcon/>
                    </div>
                </div>
    <span>{`${hora(horario[0])} ${hora(horario[1])}`}</span>
            </div>
            <div className="options-detail">
                <ul className="list-detail">
                    <li className='active'>Pizzas</li>
                    <li>Combos</li>
                    <li>Bebidas</li>
                    <li>Acompañamientos</li>
                </ul>
                <CardsDetail item={id}/>
            </div>
            <Modal open={modal.open} onClose={closeModal}>
                Debe iniciar sesion para ejecutar esta funcion
            </Modal>
        </div>
    )
} 

export default Detalles;