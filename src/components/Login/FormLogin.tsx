import useFormL from '@Hooks/FormLogin/useFormL'
import styled from 'styled-components'
import Checkbox from '../Util/Checkbox'
import Input from '../Util/Input'

const FormLogin = () => {
    const {checked,setChecked} = useFormL();

  return (
    <FormContainer>
        <h3>FormLogin</h3>
        <div>
            <div className='item'>
                <Input/>
            </div>
            <div className='item'>
                <Input/>
            </div>
            <div>
                <Checkbox size='15px' checked={checked} setChecked={setChecked}/>
            </div>
        </div>
    </FormContainer>
  )
}

const FormContainer = styled.div`
    .item:nth-child(2){
        margin-top:15px;
    }
`

export default FormLogin