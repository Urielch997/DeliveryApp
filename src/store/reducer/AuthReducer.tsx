import { AuthEnum, TypesAuthentication } from "@Interface/types/AuthTypes";
import { ActionLogin } from "@Interface/AuthInterface";

const initialState = {
    Logged: false,
    typeAuth: "",
    dataUser: {
        idUser: 0,
        userName: "",
        email: "",
        imageUrl: "",
        provider: "",
        providerid: ""
    },
    Login: {

    }
}


const AuthReducer = (state = initialState, action: ActionLogin) => {
    switch (action.type) {
        case AuthEnum.LOGIN :
            return {
                ...state,
                Logged:true,
                dataUser:{
                    ...action.payload
                },
                typeAuth:action.payload.provider
            }
        default:
            return state;
    }
}

export default AuthReducer