import { ContentFav } from "@Interface/CardFavInterface";
import { Content, RequestPageableGeneric } from "@Interface/ProducstListInterface";
import { RequestPageableGenericFav } from "@Interface/ShoopingCartInteface";
import { ShoopingTypes } from "@Interface/types/ShoopingCartType";
import { getFavoritos, SaveFavoritos,DeleteFavoritos } from "./../../services/Paths";
import { requestApi } from "@Service/Request";
import { initialStateFav } from "@Store/reducer/ShoopingCartReducer";
import { Dispatch } from "react";
import { getProductosList } from "./ProductosActions";

export const addFavAction = (product: Content) => async (dispatch: Dispatch<any>) => {
    dispatch({ type: ShoopingTypes.addProduct, payload: { ...initialStateFav, isLoading: true } })
    let response = await requestApi(SaveFavoritos(), "POST", {
        idProducto: product.idItem,
        idUser: 1
    });
    if (response.code === "00") {
        dispatch(getFavAction())
        dispatch({ type: ShoopingTypes.addProduct, payload: { ...initialStateFav, isSuccess: true, data: response.result } })
    } else {
        dispatch({ type: ShoopingTypes.addProduct, payload: { ...initialStateFav, isError: true, data: null } })
    }
}

export const modifyFavorite = (productList: RequestPageableGeneric, product: Content) => (dispatch: Dispatch<any>) => {
    let productSelected = productList.data.content.find(x => x.idItem === product.idItem);
    if (productSelected) {
        productSelected.favorito = true
        let productoModify = {
            ...productList,
            data: {
                ...productList.data,
                content: [
                    ...productList.data.content.filter(x => x.idItem !== product.idItem),
                    { ...productSelected }
                ]
            }
        }

        dispatch({ type: ShoopingTypes.modifyProduct, payload: productoModify })
    }
}

export const removeFav = (favorito: ContentFav, productList: RequestPageableGenericFav) => async (dispatch: Dispatch<any>) => {
    let content = productList.data.content.filter(x => x.producto.idItem !== favorito.producto.idItem)
   console.log("Modifiy",content,"Product list", productList)
    let productoModify = {
        ...productList,
        data: {
            ...productList.data,
            content: [
                ...content
            ]
        }
    }

    let response = await requestApi(DeleteFavoritos(favorito.idFavorito),"DELETE");
    if(response.code === "00"){
        dispatch(getProductosList());
    }
    dispatch({ type: ShoopingTypes.deleteProduct, payload: productoModify })
}


export const getFavAction = () => async (dispatch: Dispatch<any>) => {
    dispatch({ type: ShoopingTypes.addProduct, payload: { ...initialStateFav, isLoading: true } })
    let response = await requestApi(getFavoritos());
    if (response.code === "00") {
        dispatch({ type: ShoopingTypes.addProduct, payload: { ...initialStateFav, isSuccess: true, data: response.result } })
    } else {
        dispatch({ type: ShoopingTypes.addProduct, payload: { ...initialStateFav, isError: true, data: null } })
    }
}