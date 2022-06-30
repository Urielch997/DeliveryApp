import CardFav from "@Components/Favoritos/CardFav"
import Loading from "@Components/Util/Loading";
import useFavoritos from "@Hooks/Favoritos/useFavoritos"
import styled from "styled-components";

const FavoritosScreen = () => {
    const { stateFav } = useFavoritos();

    return (
        <Wrapper>
            <div className="title">Favoritos</div>
            {stateFav.isLoading ?
                <Loading />
                : stateFav.isSuccess ?
                    stateFav.data?.content.map(x =>
                        <CardFav data={x} />
                    )
                    : null}
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
