import { AuthType } from "./types/AuthTypes";

export interface Data {
    height: number;
    is_silhouette: boolean;
    url: string;
    width: number;
}

export interface Picture {
    data: Data;
}

export interface DataLogin {
    id: string;
    name: string;
    picture: Picture;
    email:string;
}

export interface ActionLogin {
    payload:DataLogin,
    type:AuthType
}

export interface initialStateAuth {
    Logged:false,
    typeAuth:string,
    dataUser:{
        name:string,
        email:string,
        picture:string
    },
    facebookLogin:{
        id: string,
        name: string,
        email:string,
        picture: {
            data: {
                height: number,
                is_silhouette: boolean,
                url: string,
                width: number
            }
    
        }
    },
    googleLogin:{

    },
    Login:{
        
    }
}