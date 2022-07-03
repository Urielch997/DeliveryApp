import CardFav from "@Components/Favoritos/CardFav";
import Detail from "@Components/Home/Detail";
import Loading from "@Components/Util/Loading";
import { Content } from "@Interface/ProducstListInterface";
import { getFavAction } from "@Store/actions/ShoopingCardActions";
import { RootState } from "@Store/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const FavoritosScreen = () => {
    const dispatch = useDispatch();
    const { favoritos } = useSelector((x: RootState) => x)
    const [seeDetail, setSeeDetail] = useState<Boolean>(false)
    const [CardSelected, setCardSelected] = useState<Content>();

    const SeeDetail = (data: Content) => {
        setCardSelected(data);
        setSeeDetail(true)
    }

    useEffect(() => {
        if (!favoritos.data.content.length) {
            dispatch(getFavAction());
        }
    }, [])

    return (
        <Wrapper>
            <div className="title">Favoritos</div>
            {seeDetail ?
                <Detail setSeeDetail={setSeeDetail} data={CardSelected} />
                :
                favoritos.isLoading ?
                    <Loading />
                    : favoritos.isSuccess ?
                        favoritos.data.content.map((item) =>
                            <CardFav data={item} action={SeeDetail} />
                        )
                        : null
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
