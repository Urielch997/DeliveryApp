export enum ShoopingTypes  {
    ADD_PRODUCT = "ADD_PRODUCT",
    DELETE_PRODUCT = "DELETE_PRODUCT",
    MODIFY_PRODUCT = "MODIFY_PRODUCT"
}

export type AddProduct = ShoopingTypes.ADD_PRODUCT | ShoopingTypes.DELETE_PRODUCT  | ShoopingTypes.MODIFY_PRODUCT