import { AuthEnum, TypesAuthentication } from "@Interface/types/AuthTypes";
import { ActionLogin } from "@Interface/AuthInterface";

const initialState = {
    Logged: false,
    typeAuth: "",
    dataUser: {
        name: "",
        email: "",
        picture: ""
    },
    facebookLogin: {
        id: "",
        name: "",
        email: "",
        picture: {
            data: {
                height: 0,
                is_silhouette: false,
                url: "",
                width: 0
            }

        }
    },
    googleLogin: {
        id: "",
        email: "",
        verified_email: false,
        name: "",
        given_name: "",
        family_name: "",
        picture: "",
        locale: ""
    },
    Login: {

    }
}


const AuthReducer = (state = initialState, action: ActionLogin) => {
    switch (action.type) {
        case AuthEnum.LOGIN_FACEBOOK:
            return {
                ...state,
                Logged: true,
                typeAuth: TypesAuthentication.FACEBOOK,
                facebookLogin: {
                    ...action.payload
                },
                dataUser: {
                    ...state.dataUser,
                    name: action.payload.name,
                    email: action.payload.email,
                    picture: action.payload.picture.data.url
                }
            };
        case AuthEnum.LOGOUT_FACEBOOK:
            return {
                ...state,
                Logged: false
            }
        case AuthEnum.LOGIN_GOOGLE:
            return {
                ...state,
                Logged: true,
                googleLogin:{
                    ...action.payload
                },
                dataUser: {
                    ...state.dataUser,
                    name: action.payload.name,
                    email: action.payload.email,
                    picture: action.payload.picture
                }
            }
        default:
            return state;
    }
}

export default AuthReducer