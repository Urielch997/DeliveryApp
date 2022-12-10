import Direccion from '@/components/ShoopingCart/Checkout/Direccion';
import Payment from '@/components/ShoopingCart/Checkout/Payment';
import { typesCards } from '@/interface/types/TypeCards';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useHistory, useLocation } from 'react-router';
import useForm from '../useForm';

export const initialPaymentForm = {
    nombre: "",
    cardNumber: "",
    cvv: "",
    fechaVencimiento: ""
}


const useCheckout = () => {
    const { state, onChange } = useForm(initialPaymentForm);
    const inputLL = useRef<HTMLInputElement>(null);
    const [typeC,setTypeC] = useState<typesCards>(typesCards.VISA);


    const chunk = (string: string, n = 4) => {
        // Crear un array a partir del string
        // "123" -> ['1', '2', '3']
        const array = Array.from(string);
        const chunks = [];
        // Siempre que haya elementos, separar en grupos de n
        while (array.length > 0) {
            const part = array.splice(0, n)
            chunks.push(part);
        }
        // Unir cada grupo (chunk) y luego unir los grupos por un espacio
        // P.e.: si n = 2:
        // '123' -> ['1', '2', '3'] -> [['1', '2'], ['3']] -> [['12'], ['3']] -> '12 3'
        return chunks.map(chunk => chunk.join('')).join(' ');
    }

    const validar = (string: string) => {
        const numero = string.split(' ').join(''); // Limpiar los espacios
        // Validar que se trate de un número válido:
        // '213s' -> NaN
        // '2135' -> 2135
        if (Number.isNaN(Number(numero))) {
            // Quitar el último elemento (lo que no es número)
            // pero conservar lo que si para evitar que el usuario
            // tenga que escribir todo nuevamente
            return numero.slice(0, -1);
        }
        return numero;
    }

    const typeCard = (valor:string) =>{
      const type =  valor.startsWith("4") ? typesCards.VISA : typesCards.MASTERCARD;
      console.log(type)
      setTypeC(type)
    }

    inputLL.current?.addEventListener('keyup', function (event) {
        const value = validar(this.value);
        typeCard(value);
        this.value = chunk(value);
    })

    return {
        state,
        onChange,
        inputLL,
        typeC
    }

}

export default useCheckout