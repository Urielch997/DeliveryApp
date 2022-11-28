import { Product } from '@/interface/CartShooping'
import { addCart, deleteCartAction } from '@/store/actions/ShoopingCardActions';
import { Content } from "@Interface/ProducstListInterface";
import { RootState } from "@Store/store";
import { useDispatch, useSelector } from "react-redux";
import { addFavAction, modifyFavorite, removeFav } from "../../store/actions/FavoritoAction";


const useShooping = () => {
    const dispatch  = useDispatch();
    const {productos,favoritos,Auth:{dataUser},Cart:{idCart}} = useSelector((x:RootState) => x )

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

    /**
     * Agregar producto
     * @param producto producto a agregar en carrito compras
     */
    const addShoopingCart = (producto:Content) =>{
        let data:Product = {
            imagen:producto.imagen,
            description:producto.description,
            nombre:producto.nombre,
            precio:producto.precio,
            precioOferta:producto.precioOferta,
            idCategoria:producto.idCategoria,
            idItem:producto.idItem
        }
        dispatch(addCart(data))
    }

    /**
     * Suma de productos en carrito de compras
     * @param product listado de productos
     * @returns 
     */
    const sum = (product:Product[]):number =>{
        let total = 0;
        product.forEach(item =>{
            total += item.precio;
        })

        return total;
    }

    const deleteCar = (idItem:string) =>{
        let idUser = localStorage.getItem("user") || "";
        dispatch(deleteCartAction(idItem,idUser));
    }

    return {
        addFav,
        deleteFav,
        addShoopingCart,
        sum,
        deleteCar
    } as const
}

export default useShooping