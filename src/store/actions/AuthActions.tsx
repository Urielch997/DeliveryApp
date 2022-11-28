
import { requestApi } from "@Service/Request";
import { Dispatch } from "react"
import { userInfo } from "@Service/Paths";
import { AuthEnum } from "@/interface/types/AuthTypes";
import { getCount, getShoppingCart } from "./ShoopingCardActions";
declare global {
    interface Window {
        FB: any;
        fbAsyncInit: any;
        google:{
            accounts:any
        }
    }
}

export const GetDataUser = () => async (dispatch:Dispatch<any>)=>{
    let response = await requestApi(userInfo);

    dispatch({type:AuthEnum.LOGIN,payload:response})
    dispatch(getShoppingCart(response.idUser))
    localStorage.setItem("user",response.idUser)
    
}

/**
 * Registro de usuarios
 */
export const Register = () => (dispatch: Dispatch<any>) => {

}

/**
 * Refresca la sesion del usuario
 */
export const RefreshToken = () => (dispatch: Dispatch<any>) => {

}

/**
 * Guarda token
 */
export const SaveToken = () => (dispatch: Dispatch<any>) => {

}