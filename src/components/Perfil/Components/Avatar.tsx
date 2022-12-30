import { RootState } from '@/store/store'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Avatar = ({width = '200px',height = '200px',fontSize = '150px'}) => {
    const { Auth: { dataUser } } = useSelector((x: RootState) => x)

    return (
        <ContainerAvatar style={{width:width,height:height}}>
            <div className="letter_avatar" style={{fontSize:fontSize}}>{dataUser.userName.split("")[0]}</div>
        </ContainerAvatar>
    )
}

const ContainerAvatar = styled.div`
        border-radius: 50%;
        height: 200px;
        width: 200px;
        background-color: #343434;
        display: flex;
        justify-content: center;
        align-items: center;
    

    .letter_avatar{
        color:#fff;
        font-size: 150px;
        width: fit-content;
        height: inherit;
    }`

export default Avatar