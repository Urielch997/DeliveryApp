import CardFav from "@Components/Favoritos/CardFav";
import Loading from "@Components/Util/Loading";
import { getFavAction } from "@Store/actions/ShoopingCardActions";
import { RootState } from "@Store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const FavoritosScreen = () => {
    const dispatch = useDispatch();
    const { favoritos } = useSelector((x:RootState) => x)

    useEffect(() => {
        if (!favoritos.data.content.length) {
            dispatch(getFavAction());
        }
    }, [])

    return (
        <Wrapper>
            <div className="title">Favoritos</div>
        {favoritos.isLoading ?
            <Loading/> 
            : favoritos.isSuccess ?
                favoritos.data.content.map((item)=>
                <CardFav data={item}/>
                )
            :null
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .title{
        width: 100%;
    }
`

export default FavoritosScreen
