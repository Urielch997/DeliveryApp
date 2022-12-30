import { RootState } from "@/store/store"
import { useSelector } from "react-redux"
import styled from "styled-components"
import Avatar from "./Components/Avatar"
import CardPerfil from "./Components/CardPerfil"
import FormPerfil from "./FormPerfil"

const SectionOne = () => {
    const { Auth: { dataUser } } = useSelector((x: RootState) => x)


    return (
        <Wrapper>
            <div className="title">
                <h2>Perfil</h2>
            </div>
            <div className="container_picture">
                {dataUser.imageUrl ?
                    <img src={dataUser.imageUrl} alt="photo_profile" /> :
                    <Avatar/>
                }
            </div>
            <div className="title_2">
                <strong><span>Datos personales</span></strong>
            </div>
            <CardPerfil>
                <FormPerfil />
            </CardPerfil>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .container_picture{
        width: 100%;
        height: 200px;
        display: flex;
    justify-content: center;
    align-items: center;
    }

    h2{
        margin: 0;
        text-align: center;
        margin-bottom:20px;
    }

    .title_2{
        width: 100%;
        text-align: center;
        margin-top: 40px;
        margin-bottom: 5px;
    }

    img{
        background: #000;
        object-fit: contain;
        width: 200px;
        border-radius: 100%;
    }

    .photo_profile{
        width: 100px;
    }
`

export default SectionOne