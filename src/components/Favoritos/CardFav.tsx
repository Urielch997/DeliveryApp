import styled from "styled-components"

const CardFav = () => {
  return (
    <CustomCard>
        <div className="product_img">
            <img src="" alt="producto"/>
        </div>
        <div className="product_name">

        </div>
    </CustomCard>
  )
}

const CustomCard = styled.div`
    background-color: var(--components);
    height: 200px;
    width: 50%;

    .product_img{
        
    }

    .product_name{

    }
`

export default CardFav