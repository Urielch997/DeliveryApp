import SectionTwo from "@/components/Perfil/Components/SectionTwo"
import SectionThree from "@/components/Perfil/SectionThree"
import SectionOne from "@Components/Perfil/SectionOne"
import styled from "styled-components"

const PerfilScreen = () => {
    return (
        <WrapperPefilScreen>
            <SectionOne/>
            <SectionTwo/>
            <SectionThree/>
        </WrapperPefilScreen>
    )
}

const WrapperPefilScreen = styled.div`
    display: flex;
    justify-content: space-around;
    margin:25px 5px;

    div{
        width: 90%;
    }

    @media screen and (max-width:600px){
       flex-direction: column;

       
    div{
        width: 100%;
    }
    }
`

export default PerfilScreen
