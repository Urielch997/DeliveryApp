
import { DataLogin } from "@Interface/AuthInterface";
import { Dispatch } from "react"
declare global {
    interface Window {
        FB: any;
        fbAsyncInit: any;
    }
}


/**
 * Verificacion de estado de logeo
 */
export const isLogin = () => (dispatch: Dispatch<any>) => {
    window.FB.getLoginStatus((response: any) => {
        console.log(response)
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
export const GoogleLogin = () => (dispatch: Dispatch<any>) => {

}