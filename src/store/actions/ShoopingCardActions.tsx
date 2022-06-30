import { Content } from "@Interface/ProducstListInterface";
import { Dispatch } from "react";

export const addFavAction = (product:Content) => (dispatch:Dispatch<any>) =>{
    dispatch({payload:product,type:"ADD_PRODUCT"});
}

export const removeFav = (product:Content) => (dispatch:Dispatch<any>) => {
    dispatch({payload:product,type:"DELETE_PRODUCT"});
}