import React from 'react';

const Cards = ({url}) =>{        
    const list = url.map((data,key) =>{
        console.log(data)
        return(
            <div className="card" key={key}>
                    <img src={data.url} alt="Imagen"/>
            </div>
        )
    })

    return(
        <>
            {list}
        </>
    )
}

export default Cards;