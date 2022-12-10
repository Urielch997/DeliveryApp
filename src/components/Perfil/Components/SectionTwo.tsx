import Button from "@/components/Util/Button"
import usePerfil from "@/hooks/Perfil/usePerfil"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import CardPerfil from "./CardPerfil"

const SectionTwo = () => {
   const {LogOutHandler} = usePerfil();

    return (
        <WrapperSectionTwo>
            <div className="title">
                <strong><span>Datos de entrega</span></strong>
            </div>
            <CardPerfil>
                <div className="row">
                    <Button text="Añadir direccion de entrega" classButton="btn_dir" />
                    <div className="dir">Barrio los remedios</div>
                </div>
            </CardPerfil>
            <div className="title_2">
                <strong><span>Acerca de Llevo</span></strong>
            </div>
            <CardPerfil>
                <div className="row">
                    <Button text="Terminos y condiciones" classButton="btn_dir" />
                    <Button text="Contactanos" classButton="btn_gray"/>
                </div>
            </CardPerfil>
            <div className="content_btn_logout">
                <Button text="Cerrar sesion" classButton="btn_logout" action={()=>LogOutHandler()}/>
            </div>
        </WrapperSectionTwo>
    )
}

const WrapperSectionTwo = styled.div`
    .dir{
        background: var(--theme);
        padding: 5px;
        width: 100%;
        box-sizing: border-box;
        text-align: center;
    }

    .title_2{
        margin-top: 50px;
    }

    .title,.title_2{
        text-align: center;
    }

    .btn_logout{
        width: fit-content;
        border-radius:5px;
        padding: 5px 20px;
        margin-top:10px;
        
    }

    .content_btn_logout{
        margin: 10px auto;
        display: flex;
    }

    .btn_gray{
        background: var(--theme);
    }

    .dir,.btn_dir,.btn_gray{
        margin-top: 15px;
        border-radius: 5px;
    }

    .row{
        margin: 0px auto;
    }

    .btn_dir{
        text-align: center;
        width: 100%;
    }
`

export default SectionTwo