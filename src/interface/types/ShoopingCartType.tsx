export enum ShoopingTypes  {
    ADD_PRODUCT = "ADD_PRODUCT",
    DELETE_PRODUCT = "DELETE_PRODUCT",
    MODIFY_CART = "MODIFY_CART",
    GET_COUNT = "COUNT_PRODUCT",
    GET_CART = "GET_CART",
    RESET_CART = "RESET_CART"
}

export enum Operations {
    SUM = "SUMA",
    REST = "RESTA"
}

export type AddProduct = ShoopingTypes.ADD_PRODUCT | ShoopingTypes.DELETE_PRODUCT  | ShoopingTypes.MODIFY_CART | ShoopingTypes.RESET_CART