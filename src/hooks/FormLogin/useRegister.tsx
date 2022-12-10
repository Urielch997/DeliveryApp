import { Register } from "@/store/actions/AuthActions";
import { DetailedHTMLProps, EventHandler, FormEvent, FormEventHandler, FormHTMLAttributes, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useForm from "../useForm"

const useRegister = () => {
    const [isSamePwd,setIsSamePwd] = useState<Boolean>(false);
    const dispatch = useDispatch();




    /**
     * Envio de datos al servidor
     * @param e evento del formulario
     */
    const submit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        let info = Object.fromEntries(new FormData(e.currentTarget));
        dispatch(Register({
            name:info.nombre,
            email:info.correo,
            password:info.password
        }))
        
    }


  return {
    submit,
    isSamePwd
  }
}

export default useRegister