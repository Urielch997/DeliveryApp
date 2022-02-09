import { Content } from "@/interface/ProducstListInterface"
import styled from "styled-components"

interface CardProps{
    setSeeDetail:React.Dispatch<React.SetStateAction<Boolean>>;
    data:Content
}

interface propsCard{
    image:string
}

const Card = ({setSeeDetail,data}:CardProps) => {

    return (
        <CardWrapper onClick={()=>setSeeDetail(true)} image={data.imagen || ""}>
            <div className='second_card'>
                    <img src={data.imagen || ""} alt="foto de producto"/>
            </div>
            <div className='state_card'>
                <div className='background'>
                    
                </div>
                <label><strong>{data.nombre}</strong></label>
                <label className='active'><strong>Abierto</strong></label>
            </div>
        </CardWrapper>
    )
}

const CardWrapper = styled.div<propsCard>`
    width: 350px;
    height: 200px;
    background: #ECECEC;
    margin: 30px;
    margin-bottom: 10px;
    margin-top:10px;
    border-radius: 10px;

    .second_card{
        width: 100%;
        height: 170px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
    }

    .second_card img{
        width: 50%;
        height: auto;
        border-radius: 10px;
    }
    @supports(object-fit: cover){
        .second_card img{
            height: 100%;
            object-fit: cover;
            object-position: center center;
        }
    }

    .state_card{
        display: flex;
        width: 90%;
        margin:0px auto;
        justify-content: space-between;
        overflow: hidden;

    }


`

export default Card
