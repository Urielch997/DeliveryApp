import Button from "@Components/Util/Button"
import useShooping from "@Hooks/ShoopingCart/useShooping"
import { CardFavInterface } from "@Interface/CardFavInterface"
import styled from "styled-components"
import FavButton from "./FavButton"



const CardFav = ({ data, action }: CardFavInterface) => {
    const { deleteFav,addShoopingCart } = useShooping();

    return (
        <CustomCard>
            <div className="header_product_card"><FavButton data={data.producto} isFavorite={data.producto.favorito} action={() => { deleteFav(data.producto.idItem) }}/></div>
            <div className="product_img">
                <img src={data.producto.imagen} alt="producto" className="image" />
            </div>
            <div className="product_name">
                {data.producto.nombre}
                <div className="button_product">
                    <Button text="Ver producto" action={() => action(data.producto)} />
                    <Button text="Agregar al carrito" action={() => addShoopingCart(data.producto)} />
                </div>
            </div>
        </CustomCard>
    )
}

const CustomCard = styled.div`
    background-color: var(--components);
    height: 200px;
    width: 47%;
    margin-top:15px;
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    position: relative;
    border-radius: 10px;

    .header_product_card{
        right: 10px;
        top:10px;
        position: absolute;
    }

    .image{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .button_product{
        width: 90%;
        margin: 0 auto;
        button{
            margin:10px auto;
        }
    }

    .product_img{
        width: 50%;
        height: 100%;
        padding: 5px;
    }

    .product_name{
        width: 50%;
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
        flex-direction: column;
    }

    .button_product{
        margin-top: 15px;
        width: 90%;
    }

    @media screen and (max-width:600px){
        width: 100%;
    }
`

export default CardFav