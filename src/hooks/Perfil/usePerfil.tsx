import { UpdateInfo } from "@Service/Paths";
import { requestApi } from "@Service/Request";
import { RootState } from "@Store/store";
import { FormEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../useForm";

const usePerfil = () => {
    const {Auth:{Logged,dataUser}} = useSelector((x:RootState)=>x);
    const dispatch = useDispatch();
    const {nombre,onChange,state,SaveEach} = useForm({
        nombre:"",
        correo:"",
        telefono:""
    });

    useEffect(() => {
      if(Logged){
      SaveEach({
        ...state,
        nombre:dataUser.userName,
        correo:dataUser.email,
        telefono:dataUser.telefono
      });
    }
    }, [Logged])

    const sendData = async (e:FormEvent) =>{
      e.preventDefault();
      let result = requestApi(UpdateInfo(),"PUT",{...state,idUser:dataUser.idUser});
      console.log(result);
    }

    


  return {
    state,
    onChange,
    sendData
  } as const
}

export default usePerfil