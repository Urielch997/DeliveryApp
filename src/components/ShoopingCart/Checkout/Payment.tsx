import useCheckout from '@/hooks/ShoopingCart/useCheckout'
import CardCredit from './Payment/CardCredit'
import FormPayment from './Payment/FormPayment'

const Payment = () => {
  const {onChange,state}=useCheckout();
  return (
    <div>Payment
    <CardCredit cardNumber={state.cardNumber} nameOwner={state.nombre} cvv={state.cvv}/>
    <FormPayment state={state} onChange={onChange}/>
    </div>
  )
}

export default Payment