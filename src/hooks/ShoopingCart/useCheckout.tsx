import Direccion from '@/components/ShoopingCart/Checkout/Direccion';
import Payment from '@/components/ShoopingCart/Checkout/Payment';
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router';
import useForm from '../useForm';

export const initialPaymentForm = {
    nombre:"",
    cardNumber:"",
    cvv:""
}


const useCheckout = () => {
    const {state,onChange} = useForm(initialPaymentForm);










    return {
        state,
        onChange,
    }

}

export default useCheckout