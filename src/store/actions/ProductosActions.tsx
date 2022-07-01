import { ProductsTypes } from "@Interface/types/ProductsType";
import { getProductos } from "@Service/Paths";
import { requestApi } from "@Service/Request";
import { initialStateProduct } from "@Store/reducer/ProductoReducer";
import { Dispatch } from "react";

export const getProductosList = (page:number = 0) => async (dispatch: Dispatch<any>) => {
    dispatch({ type: ProductsTypes.getProduct, payload: { ...initialStateProduct, isLoading: true } })
    let response = await requestApi(getProductos(page));
    if (response.code === "00") {
        dispatch({ type: ProductsTypes.getProduct, payload: { ...initialStateProduct, isSuccess: true, data: response.result } })
    } else {
        dispatch({ type: ProductsTypes.getProduct, payload: { ...initialStateProduct, isError: true, data: null } })
    }
}   