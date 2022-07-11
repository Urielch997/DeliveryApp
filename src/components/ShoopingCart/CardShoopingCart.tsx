import React from 'react'
import styled from 'styled-components'
import remove from "@Img/remove.svg";
import plus from "@Img/plus.svg"
import minimus from '@Img/minimus.svg'

const CardShoopingCart = () => {
    return (
        <ContentCard>
            <div className='content_img'>
                <img className='img_shoop' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Nintendo-Switch-wJoyCons-BlRd-Standing-FL.png/1280px-Nintendo-Switch-wJoyCons-BlRd-Standing-FL.png" alt='product' />
            </div>
            <div className="description_shoop">
                <div className="product_name_shoop">
                    nintendo
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
                <strong>$200</strong>
            </div>
            <div className="action_shooping">
                <img src={remove} className="close" />
            </div>
        </ContentCard>
    )
}

const ContentCard = styled.div`
    display: flex;
    margin:20px auto;

    .content_img,.description_shoop,.cantidad_shoop,.price_shooping,.action_shooping{
        width: calc(100%/5);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .cantidad_shoop{
        justify-content: space-around;
    }

    .close{
        width: 20px;
    }

    .rest,.plus{
        width: 10px;
        cursor:pointer;
    }

    .img_shoop{
        width: 100%;
        object-fit: contain;
    }

    .description_shoop{

    }
`



export default CardShoopingCart