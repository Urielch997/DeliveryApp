import { CartShopping, ResultCartShopping, ShoppingAction } from '@/interface/CartShooping';
import { ShoopingTypes } from '@/interface/types/ShoopingCartType';
import React from 'react'

export const initialStateShopping: ResultCartShopping = {
  idCart: "",
  idUser: "0",
  count: 0,
  products: [
    {
      idItem: "0",
      nombre: "",
      idCategoria: 0,
      precio: 0,
      precioOferta: 0,
      imagen: "",
      description: "",
      cantidad:0
    }
  ]
}


const ShoopingCartReducer = (state = initialStateShopping, action: ShoppingAction): ResultCartShopping => {
  switch (action.type) {
    case ShoopingTypes.GET_COUNT:
      return {
        ...state,
        count: action.payload.result.count
      }
    case ShoopingTypes.GET_CART:
      return {
        ...action.payload.result
      }
    case ShoopingTypes.MODIFY_CART:
        return {
          ...state,
          products:action.payload.result.products
        }
    case ShoopingTypes.RESET_CART: 
    return initialStateShopping
    default:
      return state;
  }
}

export default ShoopingCartReducer