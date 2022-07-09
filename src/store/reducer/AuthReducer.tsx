import { ActionLogin, DataLogin } from "@Interface/AuthInterface";

const initialState = {
    Logged:false,
    typeAuth:"",
    facebookLogin:{
        id: "",
        name: "",
        email:"",
        picture: {
            data: {
                height: 0,
                is_silhouette: false,
                url: "",
                width: 0
            }
    
        }
    },
    googleLogin:{

    },
    Login:{
        
    }
}


const AuthReducer = (state = initialState, action: ActionLogin) => {
    switch (action.type) {
        case "LOGIN_FACEBOOK":
            return {
                ...state,
                Logged:true,
                typeAuth:"FACEBOOK",
                facebookLogin:{
                    ...action.payload
                }
            };
        case "LOGOUT_FACEBOOK":
            return{
            ...state,
            ...action.payload
            }
        default:
            return state;
    }
}

export default AuthReducer