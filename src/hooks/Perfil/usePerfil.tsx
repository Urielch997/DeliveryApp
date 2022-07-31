import { RootState } from "@Store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../useForm";

const usePerfil = () => {
    const {Auth:{Logged,dataUser}} = useSelector((x:RootState)=>x);
    const dispatch = useDispatch();
    const {nombre,onChange,state,SaveEach} = useForm({
        nombre:"",
        correo:""
    });

    useEffect(() => {
      if(Logged){
      SaveEach({
        nombre:dataUser.userName,
        correo:dataUser.email
      });
    }
    }, [Logged])

    


  return {
    state,
    onChange,
  } as const
}

export default usePerfil