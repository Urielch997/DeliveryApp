import { ProductsAction, RequestPageableGeneric } from "@Interface/ProducstListInterface";
import { ProductsTypes } from "@Interface/types/ProductsType";

export const initialStateProduct: RequestPageableGeneric = {
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



const ProductoReducer = (state = initialStateProduct, action: ProductsAction) => {
    switch (action.type) {
        case ProductsTypes.getProduct:
            return action.payload
        case ProductsTypes.modifyProduct:
            return action.payload
        default:
            return state;
    }
}

export default ProductoReducer;

