import useCheckout from '@/hooks/ShoopingCart/useCheckout'
import CardCredit from './Payment/CardCredit'
import FormPayment from './Payment/FormPayment'
import logo from '@Img/favicon.jpg';
import styled from 'styled-components';
import Button from '@/components/Util/Button';

const Payment = () => {
  const {onChange,state,inputLL,typeC}=useCheckout();
  return (
    <Custompayment>
      <div className='container_logo'>
      <img src={logo} alt='logo' width={'100px'} height={'100px'}/>
      </div>
    <FormPayment state={state} onChange={onChange} inputLL={inputLL} typeC={typeC}/>
    </Custompayment>
  )
}

const Custompayment = styled.div`
height: 90vh;
  .container_logo{
    width: 100%;
    height: 100px;
    margin-top:10px;
    display: flex;
    justify-content: center;
  }

`

export default Payment