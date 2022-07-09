import { RootState } from "@/store/store"
import { useSelector } from "react-redux"
import styled from "styled-components"
import CardPerfil from "./Components/CardPerfil"
import FormPerfil from "./FormPerfil"

const SectionOne = () => {
    const { Auth: { facebookLogin: { picture } } } = useSelector((x: RootState) => x)


    return (
        <Wrapper>
            <div className="title">
                <h2>Perfil</h2>
            </div>
            <div className="container_picture">
                <img src={picture.data.url || "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=5227662653981769&height=200&width=200&ext=1659908904&hash=AeSK7Y7G4OqmL-0DaFA"} alt="photo_profile" />
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
        border-radius: 100%;
        
    }

    .photo_profile{
        width: 100px;
    }
`

export default SectionOne