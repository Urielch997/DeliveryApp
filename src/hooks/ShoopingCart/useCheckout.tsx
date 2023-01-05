import Direccion from '@/components/ShoopingCart/Checkout/Direccion';
import Payment from '@/components/ShoopingCart/Checkout/Payment';
import { typesCards } from '@/interface/types/TypeCards';
import { payurl } from '@/Services/Paths';
import { requestApi } from '@/Services/Request';
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
    const ref = useRef<HTMLInputElement>(null);
    const [typeC, setTypeC] = useState<typesCards>(typesCards.VISA);


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

    const typeCard = (valor: string) => {
        const type = valor.startsWith("4") ? typesCards.VISA : typesCards.MASTERCARD;
        console.log(type)
        setTypeC(type)
    }

    useEffect(() => {
        inputLL.current?.addEventListener('keyup', function (event) {
            const value = validar(this.value);
            typeCard(value);
            this.value = chunk(value);
        })
    }, [inputLL.current])

    useEffect(() => {
        ref.current?.addEventListener('keydown', function (e) {
            
            var code = (e.which) ? e.which : e.keyCode;
            console.log(code)
            if(code==8) { // backspace.
              return true;
            } else if(code>=48 && code<=57) { // is a number.
              return true;
            }else if(code  === 191 || code === 37  ||  code === 39){
                return true;
            } else{ // other keys.
              e.stopPropagation();
              e.preventDefault();
            }
         
        });

        ref.current?.addEventListener('keyup', function (e) {
            let val = this.value;
            console.log(val.includes("/"), e.key)
            if(val.length === 2){
                if(!val.includes("/") && e.key !== 'Backspace' ){
                    this.value +="/"
                }else{
                    this.value = val;
                }
            } else if(val.length === 3){
                if(!val.includes("/") && e.key !== 'Backspace' ){
                    this.value = val.slice(0,val.length -  1) + "/" + e.key;
                }
            }     
        });

        ref.current?.addEventListener('focusout', function (e) {
            if(!this.value.includes("/")){
            let  parser = this.value.split("").map((item,index)=>index === 1 ? item + "/" : item).join("");
            this.value  = parser;
            }
              
        });
    }, [ref.current])


    const payment = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let info = Object.fromEntries(new FormData(e.currentTarget));
        let idUser = localStorage.getItem("user");
        let result = requestApi(payurl, "POST", {
            numeroTarjeta: info.cardNumber,
            cvv: info.cvv,
            mesVencimiento: info.fechaVencimiento.toString().split("/")[0],
            anioVencimiento: info.fechaVencimiento.toString().split("/")[1],
            monto: 200,
            idUsuario: idUser
        });
    }

    return {
        state,
        onChange,
        inputLL,
        typeC,
        payment,
        ref
    }

}

export default useCheckout