import Button from '@/components/Util/Button'
import useCheckout, { initialPaymentForm } from '@/hooks/ShoopingCart/useCheckout'
import Input, { enumInput } from '@Components/Util/Input'
import styled from 'styled-components'
import visa from '@Img/Visa.png';
import mastercard from '@Img/mastercard.png';
import { typesCards } from '@/interface/types/TypeCards';

interface IFrom {
  onChange: (value: string, campo: any) => void,
  state: typeof initialPaymentForm,
  inputLL:React.RefObject<HTMLInputElement>,
  typeC:typesCards
}


const FormPayment = ({ onChange, state,inputLL,typeC }: IFrom) => {


  return (
    <FormWrapper>
      <div className="row">
        <div className='container_img'>
          <img src={typeC === typesCards.VISA ? visa :  mastercard} className='img_container'/>
        <Input placeholder='Numero de tarjeta' clases='w100' name="cardNumber" inputLL={inputLL}/>
        </div>
      </div>
      <div className="row">
        <Input placeholder='Nombre del titular' clases='w100' name="nombre" />
      </div>
      <div className="row d-flex justify-content-between">
      <Input placeholder='Fecha de vencimiento' clases='w45' name='fechaNacimiento' />
        <Input placeholder='CVV' clases='w45' name="cvv" />
      </div>
      <div className='row'>
        <Button text='PAGAR' classButton='botton_pay' />
      </div>
    </FormWrapper>
  )
}

const FormWrapper = styled.form`
  width: 95%;
  margin:0px auto;

  .row{
    width: 100%;
    margin: 20px auto;
  }

  .w100{
    width: 100%;
  }

  .w45{
    width: 45%;
  }

  .d-flex{
    display: flex;
  }

  .justify-content-between{
    justify-content: space-between;
  }

  .align-center{
    align-items: center;
  }

  .img_container{
    position: absolute;
    right: 0;
    top: 0;
    width: 40px;
  }

  .container_img{
    position: relative;
  }

`

export default FormPayment

