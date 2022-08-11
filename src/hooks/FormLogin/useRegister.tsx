import { FormEvent, useEffect, useState } from "react";
import useForm from "../useForm"

const useRegister = () => {
    const {onChange,state,pwd,confirmPwd} = useForm({
        nombre:"",
        apellido:"",
        pwd:"",
        confirmPwd:"",
        correo:""
    });
    const [isSamePwd,setIsSamePwd] = useState<Boolean>(false);

    const validatePassword = () =>{
        const {pwd,confirmPwd} = state;
        if(pwd !== "" && confirmPwd !== ""){
            if(pwd !== confirmPwd){
                return true;
            }else{
                return false
            }
        }else{
            return false
        }
    }

    useEffect(()=>{
        setIsSamePwd(validatePassword());
    },[pwd,confirmPwd])


    /**
     * Envio de datos al servidor
     * @param e evento del formulario
     */
    const submit = (e:FormEvent) =>{
        e.preventDefault();

        console.log(state)
    }


  return {
    onChange,
    state,
    submit,
    isSamePwd
  }
}

export default useRegister