import React from 'react'
import styled from 'styled-components'
import Input from '../Util/Input'

const FormPayment = () => {
    return (
        <FormPay >
            <div className='conteiner_payment shadow_solid'>
                <div className='title_detail_payment'>Detalle de pago</div>
                <div className="row">
                    <div className='item'>
                        <Input placeholder='Nombre del titular de la tarjeta' clases='input' />
                    </div>
                    <div className="item">
                        <Input placeholder='Numero de tarjeta' clases='input' />
                    </div>
                </div>
                <div className="row d-flex">
                    <div className="item">
                        <Input placeholder='Expiracion' clases='w-50 input_smal' />
                    </div>
                    <div className='item'>
                        <Input placeholder='CCV' clases='w-50 input_smal' />
                    </div>

                </div>

                <div>
                    <label>Total a pagar:</label>
                    <label>$25.00</label>
                </div>
                <div className="button_pay">
                    PAGAR
                </div>
            </div>
        </FormPay>
    )
}

const FormPay = styled.form`
        .row{
            width: 100%;
        }

        .item{
            width: 100%;
            margin:10px auto;
            padding: 5px;
            box-sizing: border-box;
        }
    
        .input_smal{
            width: 100%;
            justify-content: space-between;
        }

        .input{
            width: 100%;
        }

        .conteiner_payment{
        background: var(--components);
        height: 100%;
        width: 100%;
        position: relative;
        padding: 20px;
        box-sizing: border-box;
    }

    .button_pay{
        background: var(--primary);
        color:#fff;
        text-align: center;
        padding: 20px 30px;
        cursor: pointer;
        bottom:0;
        width: 100%;
        position: absolute;
        box-sizing: border-box;
        left: 0;
    }

    .title_detail_payment{
        color:#fff
    }

`

export default FormPayment