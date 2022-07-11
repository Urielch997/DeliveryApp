import { ActionLogin, DataLogin, initialStateAuth } from "@Interface/AuthInterface";
import { Reducer } from "redux";

const initialState = {
    Logged:false,
    typeAuth:"",
    dataUser:{
        name:"",
        email:"",
        picture:""
    },
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
                },
                dataUser:{
                    ...state.dataUser,
                    name:action.payload.name,
                    email:action.payload.email,
                    picture:action.payload.picture.data.url
                }
            };
        case "LOGOUT_FACEBOOK":
            return{
            ...state,
            Logged:false
            }
        default:
            return state;
    }
}

export default AuthReducer