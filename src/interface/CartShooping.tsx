import { ShoopingTypes } from "./types/ShoopingCartType"

export interface CartShopping {
    code: string
    message: string
    result: ResultCartShopping
  }
  
  export interface ResultCartShopping {
    idCart: string
    idUser: string
    count:number
    products: Product[]
  }
  
  export interface Product {
    idItem: string | number
    nombre: string
    idCategoria: number
    precio: number
    precioOferta: number
    imagen: string
    description: string | null
    cantidad:number
  }

  export interface ShoppingAction {
    type:ShoopingTypes,
    payload:CartShopping
}