
import { requestApi } from "@Service/Request";
import { Dispatch } from "react"
import { userInfo } from "@Service/Paths";
import { AuthEnum } from "@/interface/types/AuthTypes";
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