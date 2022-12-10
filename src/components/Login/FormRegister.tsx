import useRegister from '@/hooks/FormLogin/useRegister'
import { TypesAuthentication } from '@/interface/types/AuthTypes';
import Input,{enumInput} from '@Components/Util/Input'
import styled from 'styled-components'
import Button from '../Util/Button';

const FormRegister = () => {
    const {submit,isSamePwd} = useRegister();



    return (
        <Form onSubmit={submit}>
            <div className='row'>
                <div className='item'>
                    <Input clases='input_style' placeholder='nombre' name="nombre"/>
                </div>
                <div className='item'>
                    <Input clases='input_style' placeholder='apellido' name="apellido"/>
                </div>
            </div>
            <div className='item'>
                <Input clases='input_style' placeholder='correo' name='correo' type={enumInput.EMAIL}/>
            </div>
            <div className='item'>
                <Input clases='input_style' placeholder='contraseña' type={enumInput.PASSWORD} name="password"/>
            </div>
            <div className='item'>
                <Input clases={`input_style ${isSamePwd ? "error_input" : ""}`} placeholder='confirmar contraseña' type={enumInput.PASSWORD} name="validPassword"/>
            </div>
            <Button text={"Registrarme"} classButton="white border_social" typeButton='submit'/>
        </Form>
    )
}

const Form = styled.form`
    .item{
        width: 100%;
        margin-top:10px;
    }

    .input_style{
        width: 100%;
    }

    .row{
        display: flex;
        justify-content: space-between;
        width: 100%;
        flex-wrap: nowrap;
        align-items: center;
        .item{
            width: 45%;
        }
    }

`

export default FormRegister