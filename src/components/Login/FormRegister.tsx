import Input from '@Components/Util/Input'
import styled from 'styled-components'

const FormRegister = () => {
    return (
        <Form>
            <div className='row'>
                <div className='item'>
                    <Input clases='input_style'/>
                </div>
                <div className='item'>
                    <Input clases='input_style'/>
                </div>
            </div>
            <div className='item'>
                <Input clases='input_style'/>
            </div>
            <div className='item'>
                <Input clases='input_style'/>
            </div>
            <div className='row'>
                <div className='item'>
                    <Input clases='input_style'/>
                </div>
                <div className='item'>
                    <Input clases='input_style'/>
                </div>
            </div>
        </Form>
    )
}

const Form = styled.div`
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