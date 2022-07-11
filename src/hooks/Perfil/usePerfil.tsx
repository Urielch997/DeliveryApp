import { RootState } from "@/store/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import useForm from "../useForm";

const usePerfil = () => {
    const {Auth:{Logged,dataUser}} = useSelector((x:RootState)=>x);
    const {nombre,onChange,state,SaveEach} = useForm({
        nombre:"",
        correo:""
    });

    useEffect(() => {
      if(Logged){
      SaveEach({
        nombre:dataUser.name,
        correo:dataUser.email
      });
    }
    }, [Logged])
    


  return {
    state,
    onChange
  } as const
}

export default usePerfil