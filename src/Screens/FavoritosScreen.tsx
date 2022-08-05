import { ContentFav } from "@Interface/CardFavInterface";
import CardFav from "@Components/Favoritos/CardFav";
import Detail from "@Components/Home/Detail";
import Loading from "@Components/Util/Loading";
import { Content } from "@Interface/ProducstListInterface";
import { getFavAction } from "@Store/actions/FavoritoAction";
import { RootState } from "@Store/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const FavoritosScreen = () => {
    const dispatch = useDispatch();
    const { favoritos } = useSelector((x: RootState) => x)
    const [seeDetail, setSeeDetail] = useState<Boolean>(false)
    const [CardSelected, setCardSelected] = useState<Content>();
    const { Auth: { dataUser } } = useSelector((x: RootState) => x)

    const SeeDetail = (data: Content) => {
        setCardSelected(data);
        setSeeDetail(true)
    }

    useEffect(() => {
        if (!favoritos.data.content.length) {
            dispatch(getFavAction(dataUser.idUser));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <Wrapper>
            <div className="title">Favoritos</div>
            {seeDetail ?
                <Detail setSeeDetail={setSeeDetail} data={CardSelected} />
                :
                favoritos.isLoading
                    ?
                    <Loading />
                    : favoritos.isSuccess ?
                        favoritos.data.content.map((item:ContentFav) =>
                            <CardFav data={item} action={SeeDetail} key={item.idFavorito} />
                        )
                        : null
            }

        </Wrapper>
    )
}

const Wrapper = styled.div`

    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .title{
        width: 100%;
    }
`

export default FavoritosScreen
