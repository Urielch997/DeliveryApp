import { ContentFav } from "@Interface/CardFavInterface";
import { Content } from "@Interface/ProducstListInterface";
import { RootState } from "@Store/store";
import { useDispatch, useSelector } from "react-redux";
import { addFavAction, modifyFavorite, removeFav } from "../../store/actions/FavoritoAction";


const useShooping = () => {
    const dispatch  = useDispatch();
    const {productos,favoritos,Auth:{dataUser}} = useSelector((x:RootState) => x )

    /**
     * Agregar a favoritos
     * @param product producto seleccionado
     */
    const addFav = (producto:Content,idUser:number) =>{
        dispatch(addFavAction(producto,idUser))
        dispatch(modifyFavorite(productos,producto))
    }

    /**
     * Eliminar producto de favoritos
     * @param producto producto a eliminar de favoritos
     */
    const deleteFav = (idProducto:number) =>{
        dispatch(removeFav(idProducto,favoritos,dataUser.idUser));
    }

    return {
        addFav,
        deleteFav
    } as const
}

export default useShooping