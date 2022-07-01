import styled from "styled-components";

const FavoritosScreen = () => {
  

    return (
        <Wrapper>
            <div className="title">Favoritos</div>

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
