import Button from '@Components/Util/Button'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useFormL from '@Hooks/FormLogin/useFormL'
import { iconProps } from '@utils/Tools/Utils';
import styled from 'styled-components'
import Checkbox from '../Util/Checkbox'
import Input from '../Util/Input'

const FormLogin = () => {
    const { checked, setChecked } = useFormL();

    return (
        <FormContainer>
            <h3>FormLogin</h3>
            <div className='formulario'>
                <div className='item'>
                    <Input clases='width_input' />
                </div>
                <div className='item'>
                    <Input clases='width_input' />
                </div>
                <div className='container_check'>
                    <Checkbox size='15px' checked={checked} setChecked={setChecked} />
                </div>
                <div>
                    <Button text='Iniciar' />
                    <div className='line'>
                        <div className='line_divider' />
                        <div className='text_line'>o si prefieres</div>
                        <div className='line_divider' />
                    </div>
                    <Button text="Hola"  />
                   
                </div>
            </div>
        </FormContainer>
    )
}

const FormContainer = styled.div`
    width: 45%;
    padding:20px;

    .item:nth-child(2){
        margin-top:15px;
    }

    .width_input{
        width: 100%;
    }

    .container_check{
        margin-top:10px;
    }

    .line{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top:30px;

        .line_divider{
            width: 40%;
            height: 1px;
            background: #000;
        }

        .text_line{
            width: 80%;
            display: flex;
            justify-content: center;
        }

    }

   
`

export default FormLogin