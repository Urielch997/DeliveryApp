import { Content } from "@Interface/ProducstListInterface"

const initialState:Content[] = [];

interface ActionInterface {
    type:AddProduct,
    payload:Content
}

export type AddProduct = "ADD_PRODUCT" | "DELETE_PRODUCT" | "ADD_FIRST_PRODUCT"

const ShoopingCartReducer = (state = initialState,action:ActionInterface) =>{
    switch (action.type) {
        case 'ADD_PRODUCT':
            return  [...state,{...action.payload}]
        case "DELETE_PRODUCT":
            return [
                ...state,{...action.payload}
            ]
        default:
            return state
    }
}

export default ShoopingCartReducer;