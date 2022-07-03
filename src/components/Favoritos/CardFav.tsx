import Button from "@Components/Util/Button"
import { CardFavInterface } from "@Interface/CardFavInterface"
import styled from "styled-components"



const CardFav = ({data,action}:CardFavInterface) => {
  return (
    <CustomCard>
        <div className="product_img">
            <img src={data.producto.imagen} alt="producto" className="image"/>
        </div>
        <div className="product_name">
            {data.producto.nombre}
            <div className="button_product"><Button text="Ver producto" action={()=>action(data.producto)}/></div>
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
    border-radius: 10px;

    .image{
        width: 100%;
        height: 100%;
        object-fit: contain;
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
        width: 100%;
    }
`

export default CardFav