import { payloadCategoria, ResponseCategoria } from "@/interface/CategoriaInterface";
import { CategoriaType } from "@/interface/types/CategoriaType";

export const initialStateCategoria:ResponseCategoria = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    data: []
}


const MenuCategoriaReducer = (state = initialStateCategoria,action:payloadCategoria):ResponseCategoria =>{
    switch (action.type) {
        case CategoriaType.GET_ALL_CAT:
            return action.payload  
        default:
           return state;
    }
}

export default MenuCategoriaReducer;