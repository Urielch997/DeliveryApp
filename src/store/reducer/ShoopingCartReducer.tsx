import { Content } from "@Interface/ProducstListInterface"
import { ActionInterface } from "@Interface/ShoopingCartInteface";
import { ShoopingTypes } from "@Interface/types/ShoopingCartType";

const initialState:Content[] = [];

const ShoopingCartReducer = (state = initialState,action:ActionInterface) =>{
    switch (action.type) {
        case ShoopingTypes.addProduct:
            return  [...state,{...action.payload}]
        case ShoopingTypes.deleteProduct:
            return [
                ...state,{...action.payload}
            ]
        default:
            return state
    }
}

export default ShoopingCartReducer;