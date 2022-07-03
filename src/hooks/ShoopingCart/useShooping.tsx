import { Content } from "@Interface/ProducstListInterface";
import { RootState } from "@store/store";
import { useDispatch, useSelector } from "react-redux";
import { addFavAction, modifyFavorite, removeFav } from "../../store/actions/ShoopingCardActions";


const useShooping = () => {
    const dispatch  = useDispatch();
    const {productos} = useSelector((x:RootState) => x )

    /**
     * Agregar a favoritos
     * @param product producto seleccionado
     */
    const addFav = (producto:Content) =>{
        dispatch(addFavAction(producto))
        dispatch(modifyFavorite(productos,producto))
    }

    /**
     * Eliminar producto de favoritos
     * @param producto producto a eliminar de favoritos
     */
    const deleteFav = (producto:Content) =>{
        removeFav(producto)
    }

    return {
        addFav,
        deleteFav
    } as const
}

export default useShooping