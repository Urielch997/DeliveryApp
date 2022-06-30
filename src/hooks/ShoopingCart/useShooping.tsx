import { Content } from "@Interface/ProducstListInterface";
import { useDispatch } from "react-redux";
import { addFavAction, removeFav } from "../../store/actions/ShoopingCardActions";


const useShooping = () => {
    const dispatch  = useDispatch();

    /**
     * Agregar a favoritos
     * @param product producto seleccionado
     */
    const addFav = (producto:Content) =>{
        dispatch(addFavAction(producto))
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