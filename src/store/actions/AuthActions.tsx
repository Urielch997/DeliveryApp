
import { requestApi } from "@Service/Request";
import { DataLogin } from "@Interface/AuthInterface";
import { Dispatch } from "react"
import { urlUserGoogle } from "@Service/Paths";
import { AuthEnum } from "@Interface/types/AuthTypes";
declare global {
    interface Window {
        FB: any;
        fbAsyncInit: any;
        google:{
            accounts:any
        }
    }
}


/**
 * Verificacion de estado de logeo
 */
export const isLogin = () => (dispatch: Dispatch<any>) => {
    window.FB.getAuthResponse((response:any)=>{
        console.log(response)
    })
    window.FB.getLoginStatus((response: any) => {
        if (response.status === "connected") {
            //leer los datos del usuario
            dispatch(facebookHandler(response));
        } else {
            //intentar iniciar sesion
            dispatch({ type: "LOGOUT_FACEBOOK", payload: { Logged: false } });
        }
    });
}

/**
 *  Iniciar sesion con facebook
 */
export const facebookHandler = (response: any) => (dispatch: Dispatch<any>) => {
    console.log(response)
    if (response.status === "connected") {
        window.FB.api('/me?fields=id,name,email,picture.type(large)', (userDate: DataLogin) => {
            dispatch({ type: "LOGIN_FACEBOOK", payload: userDate })
        });
    }
}

export const facebookLogin = () => {
    window.FB.login(facebookHandler, { scope: "public_profile,email" })
}

/**
 * Loggin de usuarios
 */
export const Loggin = () => (dispatch: Dispatch<any>) => {

}

/**
 * Logut de usuarios
 */
export const Logout = () => (dispatch: Dispatch<any>) => {
    window.FB.logout((response:any) =>{
        console.log(response)
    });
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

/**
 * Iniciar sesion con Google
 */
export const GoogleLogin = (response:any) => (dispatch: Dispatch<any>) => {
    if(response.authuser){
        requestApi(urlUserGoogle(response.access_token)).then((x)=>{
            if(x.given_name){
                dispatch({type:AuthEnum.LOGIN_GOOGLE,payload:x})
            }
        })
    }
}