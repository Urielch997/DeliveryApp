import usePerfil from "@Hooks/Perfil/usePerfil";
import styled from "styled-components"
import Button from "../Util/Button"
import Input from "../Util/Input"

const FormPerfil = () => {
    const {state,onChange,sendData} = usePerfil();

  return (
    <WrapperForm onSubmit={sendData}>
        <div className="row">
            <span>Nombre:</span>
            <div className="item">
                <Input clases="input" value={state.nombre} onChange={(e)=>onChange(e.target.value,"nombre")}/>
            </div>
        </div>
        <div className="row">
            <span>Correo electronico:</span>
            <div className="item">
                <Input clases="input" value={state.correo} onChange={(e)=>onChange(e.target.value,"correo")}/>
            </div>
        </div>
        <div className="row">
            <span>Telefono:</span>
            <div className="item">
                <Input clases="input" value={state.telefono} onChange={(e)=>onChange(e.target.value,"telefono")}/>
            </div>
        </div>
        <div className="container_button_perfil">
            <Button text="Editar" classButton="btn_class" typeButton="submit"/>
        </div>
    </WrapperForm>
  )
}

export const WrapperForm = styled.form`
    width: 95%;
    margin:10px auto;

    .input{
        width: 100%;
    }

    .row{
        width: 100%;
    }

    .btn_class{
        padding: 10px 15px;
        border-radius: 6px;
        width: fit-content;
        display: flex;
    }

    .container_button_perfil{
        width: 100%;
        margin-top: 10px;
    }

    .item{
        width: 100%;
    }
`

export default FormPerfil