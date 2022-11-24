import { ShoopingTypes } from '@/interface/types/ShoopingCartType'
import { getCart, getCountCart } from '@/Services/Paths'
import { requestApi } from '@/Services/Request'
import React, { Dispatch } from 'react'

export const getCount = (idCart:string) => async (dispatch: Dispatch<any>) =>{
    let response = await requestApi(getCountCart(idCart));
    let count = {
      result:{
        count:response.result
      }
    }
    if (response.code === "00") {
      dispatch({type:ShoopingTypes.GET_COUNT,payload:count})
    }
}

export const getShoppingCart= (idCart:string) => async (dispatch: Dispatch<any>)=>{
  let response = await requestApi(getCart(idCart));
    if (response.code === "00") {
      dispatch({type:ShoopingTypes.GET_CART,payload:response})
    }
}