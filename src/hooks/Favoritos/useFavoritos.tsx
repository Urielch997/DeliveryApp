import {  ResultFav } from '@interface/CardFavInterface';
import { getFavoritos } from '@Service/Paths';
import useRequest from '@Service/useRequest';
import { useEffect } from 'react';

const useFavoritos = () => {
    const [stateFav,getDataFav] = useRequest<ResultFav>();

    const getFavoritosList = () =>{
        getDataFav(getFavoritos(),"GET")
    }

    useEffect(()=>{
        getFavoritosList();
    },[])
    
    return{
        stateFav,
    }
}

export default useFavoritos