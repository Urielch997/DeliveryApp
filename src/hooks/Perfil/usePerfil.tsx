import { LogOut } from "@/store/actions/AuthActions";
import { UpdateInfo } from "@Service/Paths";
import { requestApi } from "@Service/Request";
import { RootState } from "@Store/store";
import React, { FormEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import useForm from "../useForm";

const usePerfil = () => {
    const {Auth:{Logged,dataUser}} = useSelector((x:RootState)=>x);
    const dispatch = useDispatch();
    const history = useHistory();
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

    const sendData = async (e:React.FormEvent<HTMLFormElement>) =>{
      e.preventDefault();
      let info = Object.fromEntries(new FormData(e.currentTarget));
      let result = requestApi(UpdateInfo(),"PUT",{nombre:info.nombre,
        correo:info.correo,
        telefono:info.telefono
        ,idUser:dataUser.idUser});
      console.log(result);
    }


    const LogOutHandler = () =>{
      dispatch(LogOut());
      history.push("/")
    }


  return {
    state,
    onChange,
    sendData,
    LogOutHandler,
    dataUser
  } as const
}

export default usePerfil