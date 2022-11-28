import { Product } from '@/interface/CartShooping'
import { ShoopingTypes } from '@/interface/types/ShoopingCartType'
import { addCartUrl, deleteCart, getCart, getCountCart } from '@/Services/Paths'
import { requestApi } from '@/Services/Request'
import { Dispatch } from 'react'

export const getCount = (idCart: string) => async (dispatch: Dispatch<any>) => {
  let response = await requestApi(getCountCart(idCart));
  let count = {
    result: {
      count: response.result
    }
  }
  if (response.code === "00") {
    dispatch({ type: ShoopingTypes.GET_COUNT, payload: count })
  }
}

export const getShoppingCart = (idCart: string) => async (dispatch: Dispatch<any>) => {
  let response = await requestApi(getCart(idCart));
  if (response.code === "00") {
    localStorage.setItem("cart",response.result.idCart)
    dispatch({ type: ShoopingTypes.GET_CART, payload: response })
  }
}

export const addCart = (product: Product) => async (dispatch: Dispatch<any>) => {
  let idUser = localStorage.getItem("user") || "";
  let response = await requestApi(addCartUrl,"POST",{
    idUser,
    products:product
  });
  if (response.code === "00") {
      dispatch({type:ShoopingTypes.ADD_PRODUCT,payload:response})
      dispatch(getShoppingCart(idUser));
  }
}

export const deleteCartAction = (idItem:string,idUser:string) => async (dispatch: Dispatch<any>)=> {
  let response = await requestApi(deleteCart(idItem,idUser),"DELETE");
  if(response.code === "00"){
    dispatch(getShoppingCart(idUser));
  }
}