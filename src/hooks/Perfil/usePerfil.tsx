import { RootState } from "@/store/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import useForm from "../useForm"

const usePerfil = () => {
    const {Auth:{facebookLogin,Logged}} = useSelector((x:RootState)=>x);
    const {nombre,onChange,state,SaveEach} = useForm({
        nombre:"",
        correo:""
    });

    useEffect(() => {
      if(Logged){
      SaveEach({
        nombre:facebookLogin.name,
        correo:facebookLogin.email
      });
    }
    }, [Logged])
    


  return {
    state,
    onChange
  } as const
}

export default usePerfil