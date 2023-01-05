import { CategoriaType } from "./types/CategoriaType"

export interface ResponseCategoria{
isLoading:boolean,
isError:boolean,
isSuccess:boolean,
data:dataCategoria[]
}

export interface dataCategoria{
    idCategoria:number,
    nombreCategoria:string
}

export interface payloadCategoria{
        type:CategoriaType,
        payload:any
}