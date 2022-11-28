import styled from 'styled-components'
import remove from "@Img/remove.svg";
import plus from "@Img/plus.svg"
import minimus from '@Img/minimus.svg'
import { Product } from '@/interface/CartShooping';
import useShooping from '@/hooks/ShoopingCart/useShooping';

interface CartInterface {
    productoCart:Product
}

const CardShoopingCart = ({productoCart}:CartInterface) => {
    const {deleteCar} = useShooping();
   

    return (
        <ContentCard>
            <div className='content_img'>
                <img className='img_shoop' src={productoCart.imagen} alt='product' />
            </div>

        <div className='container_descrip'>

            <div className="description_shoop">
                <div className="product_name_shoop">
                    {productoCart.nombre}
                </div>
            </div>
            <div className="cantidad_shoop">
                <div>
                    <img src={minimus} className="rest" alt='rest' />
                </div>
                12
                <div>
                    <img src={plus} className="plus" alt='plus' />
                </div>
            </div>
            <div className="price_shooping">
                <strong>{`$${productoCart.precio}`}</strong>
            </div>
            <div className="action_shooping">
                <img src={remove} className="close" onClick={()=>deleteCar(productoCart.idItem.toString())}/>
            </div>

            </div>

        </ContentCard>
    )
}

const ContentCard = styled.div`
    display: flex;
    margin:20px auto;

    border-bottom: 1px solid #e7e4e4;
    padding: 10px 5px;

    &:last-child{
        border:0px;
    }

    .content_img,.description_shoop,.cantidad_shoop,.price_shooping,.action_shooping{
        width: calc(100%/4);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .cantidad_shoop{
        justify-content: space-around;
    }

    .close{
        width: 20px;
        cursor:pointer;
    }

    .rest,.plus{
        width: 10px;
        cursor:pointer;
    }

    .img_shoop{
        width: 70%;
        object-fit: contain;
    }

    .description_shoop{

    }

    .container_descrip{
        width: 100%;
        display: flex;

        @media screen and (max-width:600px){
            flex-wrap: wrap;

            .description_shoop{
                width: 100%;
            }

            .cantidad_shoop,.price_shooping,.action_shooping{
                width: calc(100%/3);
            }

          
        }
    }

    @media screen and (max-width:600px){
        .content_img{
                width: 63%;
            }

            
    }
`



export default CardShoopingCart