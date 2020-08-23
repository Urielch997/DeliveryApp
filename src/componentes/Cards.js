import React from 'react';

const Cards = ({url}) =>{        
    const list = url.map((data,key) =>{
        return(
            <li className="card" key={key}>
                    <img src={data.url} alt="Imagen"/>
            </li>
        )
    })

    return(
        <>
            <ul className='ul-card'>
                {list}
            </ul>
        </>
    )
}

export default Cards;