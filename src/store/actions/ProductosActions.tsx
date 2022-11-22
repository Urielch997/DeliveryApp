import { scrollTop } from "@/utils/Tools/Utils";
import { ProductsTypes } from "@Interface/types/ProductsType";
import { getProductos } from "@Service/Paths";
import { requestApi } from "@Service/Request";
import { initialStateProduct } from "@Store/reducer/ProductoReducer";
import { Dispatch } from "react";

export const getProductosList = (page:number = 0,idUser:number=0) => async (dispatch: Dispatch<any>) => {
    dispatch({ type: ProductsTypes.GET_PRODUCT, payload: { ...initialStateProduct, isLoading: true } })
    let response = await requestApi(getProductos(page,10,idUser));
    if (response.code === "00") {
        scrollTop();
        dispatch({ type: ProductsTypes.GET_PRODUCT, payload: { ...initialStateProduct, isSuccess: true, data: response.result } })
    } else {
        dispatch({ type: ProductsTypes.GET_PRODUCT, payload: { ...initialStateProduct, isError: true, data: null } })
    }
}
