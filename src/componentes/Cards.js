import React, { useState, useEffect } from 'react';
import CircularProgress from "@material-ui/core/CircularProgress";
import db from "../fireConfig";
import { cleanup } from '@testing-library/react';


const Cards = () =>{  
    const [url,setUrl] = useState();
    const [loading, setLoading] = useState();

    
   const getData = () =>{
        db.collection('banner').get().then(snapshot =>{
            setUrl(snapshot.docs.map(data=>{
              return{url:data.data().url}
          }));
        }).then(() =>{
            setLoading(true);
        })
      }
    
    useEffect(()=>{
        getData();
        return async ()=>{cleanup()}
    })

    return(
        <>
            <ul className='ul-card'>
                { loading ?(url.map((data,key) =>{
                    return(
                        <li className="card" key={key}>
                                <img src={data.url} alt="Imagen"/>
                        </li>
                    )
                })) : (
                    <div className="box">
                      <CircularProgress classes={{ svg: "red" }} />
                    </div>
                  )} 
            </ul>
        </>
    )
}

export default Cards;