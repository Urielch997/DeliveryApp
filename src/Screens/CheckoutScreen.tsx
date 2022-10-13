import Direccion from '@/components/ShoopingCart/Checkout/Direccion';
import Payment from '@/components/ShoopingCart/Checkout/Payment';
import useCheckout from '@Hooks/ShoopingCart/useCheckout'
import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';

const CheckoutScreen = () => {
  const history = useHistory();
  const url = useLocation();
  const param = new URLSearchParams(url.search);


  const changePage = (page:string| null) => {
    switch (page) {
      case "1":
        return <Direccion />
      case "2":
        return <Payment />
      default:
        history.push("/shoppingCart");
    }
  }

  return (
    <div>
      { changePage(param.get("page")) }
    </div>
  )
}

export default CheckoutScreen