import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {Link} from 'react-router-dom';

const ListCards = () =>{
    return(
            <div className="cards-list">
                <Link to='/detalles'>
                    <div className="card-img">
                        <div className="love"><FavoriteIcon/></div>
                    </div>
                    <div className="text-card-footer"><span>Tecolote</span><span className="active">Abierto</span></div>
                </Link>
            </div>
    )
}

export default ListCards;