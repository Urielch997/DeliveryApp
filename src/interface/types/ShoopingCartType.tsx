export enum ShoopingTypes  {
    ADD_PRODUCT = "ADD_PRODUCT",
    DELETE_PRODUCT = "DELETE_PRODUCT",
    MODIFY_PRODUCT = "MODIFY_PRODUCT",
    GET_COUNT = "COUNT_PRODUCT",
    GET_CART = "GET_CART"
}

export type AddProduct = ShoopingTypes.ADD_PRODUCT | ShoopingTypes.DELETE_PRODUCT  | ShoopingTypes.MODIFY_PRODUCT