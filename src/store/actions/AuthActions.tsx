
import { requestApi } from "@Service/Request";
import { Dispatch } from "react"
import { LOGIN, register, userInfo } from "@Service/Paths";
import { AuthEnum } from "@/interface/types/AuthTypes";
import { getCount, getShoppingCart } from "./ShoopingCardActions";
import { ShoopingTypes } from "@/interface/types/ShoopingCartType";
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
export const Register = (userData:any) => async (dispatch: Dispatch<any>) => {
    let response = await requestApi(register,"POST",{
        ...userData
    });
    dispatch(Login(userData.email,userData.password))
}

/**
 * Refresca la sesion del usuario
 */
export const RefreshToken = () => (dispatch: Dispatch<any>) => {

}

export const Login = (email:string,password:string) => async (dispatch:Dispatch<any>)=>{
    let response = await requestApi(LOGIN,"POST",{
        email,
        password
    })
    console.log(response)
    if(response.code === "00"){
        localStorage.setItem("token",response.result.accessToken);
        dispatch(GetDataUser());
    }
}

/**
 * Cerrar session
 */

export const LogOut= () => (dispatch:Dispatch<any>)=>{
    localStorage.clear();
    dispatch({type:AuthEnum.LOGOUT})
    dispatch({type:ShoopingTypes.RESET_CART})
}