import { ContentFav } from "@Interface/CardFavInterface";
import { Content, RequestPageableGeneric } from "@Interface/ProducstListInterface";
import { RequestPageableGenericFav } from "@Interface/ShoopingCartInteface";
import { ShoopingTypes } from "@Interface/types/ShoopingCartType";
import { getFavoritos, SaveFavoritos,DeleteFavoritos, deleteFavoritosByIdUserAndIdProducto } from "@Service/Paths";
import { requestApi } from "@Service/Request";
import { initialStateFav } from "@Store/reducer/FavoritoReducer";
import { Dispatch } from "react";
import { getProductosList } from "./ProductosActions";

/**
 * Agrega a la lista de favoritos del usuario
 * @param product producto seleccionado
 * @param idUser id del usuario que ejecuta la accion
 */
export const addFavAction = (product: Content,idUser:number) => async (dispatch: Dispatch<any>) => {
    dispatch({ type: ShoopingTypes.ADD_PRODUCT, payload: { ...initialStateFav, isLoading: true } })
    let response = await requestApi(SaveFavoritos(), "POST", {
        idProducto: product.idItem,
        idUser
    });
    if (response.code === "00") {
        dispatch(getFavAction(idUser))
        dispatch({ type: ShoopingTypes.ADD_PRODUCT, payload: { ...initialStateFav, isSuccess: true, data: response.result } })
    } else {
        dispatch({ type: ShoopingTypes.ADD_PRODUCT, payload: { ...initialStateFav, isError: true, data: null } })
    }
}

/**
 * Modifica el state actual del producto seleccionado como favorito
 * @param productList listado del productos
 * @param product producto seleccionado
 */
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

        dispatch({ type: ShoopingTypes.MODIFY_PRODUCT, payload: productoModify })
    }
}

/**
 * Elimina el favorito del usuario
 * @param idProducto id del producto seleccionado
 * @param productList lista de productos
 * @param idUsuario id del usuario que realiza la accion
 */
export const removeFav = (idProducto: number, productList: RequestPageableGenericFav,idUsuario:number) => async (dispatch: Dispatch<any>) => {
    let response = await requestApi(deleteFavoritosByIdUserAndIdProducto(idUsuario,idProducto),"DELETE");
    if(response.code === "00"){
        dispatch(getProductosList());
    }
    dispatch({ type: ShoopingTypes.DELETE_PRODUCT, payload: {...productList,idProducto} })
}

/**
 * Obtiene el listado de favoritos del usuario
 * @param idUser id del usuario
 */
export const getFavAction = (idUser:number) => async (dispatch: Dispatch<any>) => {
    dispatch({ type: ShoopingTypes.ADD_PRODUCT, payload: { ...initialStateFav, isLoading: true } })
    let response = await requestApi(getFavoritos(idUser));
    if (response.code === "00") {
        dispatch({ type: ShoopingTypes.ADD_PRODUCT, payload: { ...initialStateFav, isSuccess: true, data: response.result } })
    } else {
        dispatch({ type: ShoopingTypes.ADD_PRODUCT, payload: { ...initialStateFav, isError: true, data: null } })
    }
}