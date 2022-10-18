import { initialPaymentForm } from '@/hooks/ShoopingCart/useCheckout'
import Input, { enumInput } from '@Components/Util/Input'
import styled from 'styled-components'

interface IFrom{
  onChange:(value:string,campo:any)=>void,
  state:typeof initialPaymentForm

}


const FormPayment =({onChange,state}:IFrom) => {


  return (
    <FormWrapper>
      <div className="row">
      <Input placeholder='Numero de tarjeta' clases='w100' value={state.cardNumber} onChange={(e)=>onChange(e.target.value,"cardNumber")}/>
      </div>
      <div className="row">
      <Input placeholder='Nombre del titular' clases='w100' value={state.nombre} onChange={(e)=>onChange(e.target.value,"nombre")}/>
      </div>
      <div className="row">
      <Input placeholder='fecha de vencimiento' type={enumInput.MONTH} clases='w100' value={state.cvv} onChange={(e)=>onChange(e.target.value,"cvv")}/>
      </div>
    </FormWrapper>
  )
}

const FormWrapper = styled.form`
  .row{
    width: 100%;
    margin: 20px auto;
  }

  .w100{
    width: 100%;
  }

`

export default FormPayment

