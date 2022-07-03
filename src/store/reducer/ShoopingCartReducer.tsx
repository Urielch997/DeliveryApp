import { ActionInterface, RequestPageableGenericFav } from "@Interface/ShoopingCartInteface";
import { ShoopingTypes } from "@Interface/types/ShoopingCartType";

export const initialStateFav: RequestPageableGenericFav= {
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

const ShoopingCartReducer = (state = initialStateFav,action:ActionInterface) =>{
    switch (action.type) {
        case ShoopingTypes.addProduct:
            return  action.payload
        case ShoopingTypes.deleteProduct:
            return action.payload
        default:
            return state
    }
}

export default ShoopingCartReducer;