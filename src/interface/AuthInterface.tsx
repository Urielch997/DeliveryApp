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
}

export interface ActionLogin {
    payload:DataLogin,
    type:AuthType
}