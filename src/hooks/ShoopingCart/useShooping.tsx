import { ContentFav } from "@Interface/CardFavInterface";
import { Content } from "@Interface/ProducstListInterface";
import { RootState } from "@Store/store";
import { useDispatch, useSelector } from "react-redux";
import { addFavAction, modifyFavorite, removeFav } from "../../store/actions/ShoopingCardActions";


const useShooping = () => {
    const dispatch  = useDispatch();
    const {productos,favoritos} = useSelector((x:RootState) => x )

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
    const deleteFav = (favorito:ContentFav) =>{
        console.log(productos)
        dispatch(removeFav(favorito,favoritos))
    }

    return {
        addFav,
        deleteFav
    } as const
}

export default useShooping