import { ContentFav } from "@/interface/CardFavInterface";
import { FavAction } from "@/interface/types/FavTypes";
import { ActionInterface, RequestPageableGenericFav } from "@Interface/ShoopingCartInteface";
import { ShoopingTypes } from "@Interface/types/ShoopingCartType";

export const initialStateFav:RequestPageableGenericFav = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    data: {
        content: [],
        pageable: {
            sort: {
                sorted: true,
                unsorted: false,
                empty: false
            },
            pageSize: 10,
            pageNumber: 0,
            offset: 0,
            paged: true,
            unpaged: false
        },
        last: false,
        totalPages: 1,
        totalElements: 3,
        first: true,
        numberOfElements: 3,
        size: 10,
        number: 0,
        empty: false,
        sort: {
            sorted: true,
            unsorted: false,
            empty: false
        }
    }
};

const FavoritoReducer = (state = initialStateFav,action:ActionInterface):RequestPageableGenericFav =>{
    switch (action.type) {
        case FavAction.ADD_FAV:
            return  action.payload
        case FavAction.REMOVE_FAV:
            return {
                ...state,
                ...action.payload,
                data: {
                    ...action.payload.data,
                    content: action.payload.data.content.filter((x:ContentFav)=>x.producto.idItem !== action.payload.idProducto)
                }
            }
        default:
            return state
    }
}

export default FavoritoReducer;