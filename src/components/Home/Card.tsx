import React from "react"
import styled from "styled-components"

interface CardProps{
    setSeeDetail:React.Dispatch<React.SetStateAction<Boolean>>
}

const Card = ({setSeeDetail}:CardProps) => {
    return (
        <CardWrapper onClick={()=>setSeeDetail(true)}>
            <div className='second_card'>

            </div>
            <div className='state_card'>
                <div className='background'>

                </div>
                <label><strong>Hibou</strong></label>
                <label className='active'><strong>Abierto</strong></label>
            </div>
        </CardWrapper>
    )
}

const CardWrapper = styled.div`
    width: 350px;
    height: 200px;
    background: #ECECEC;
    margin: 30px;
    margin-bottom: 10px;
    margin-top:10px;
    border-radius: 10px;

    .second_card{
        background: #fff;
        width: 100%;
        height: 170px;
        border-radius: 10px;
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
