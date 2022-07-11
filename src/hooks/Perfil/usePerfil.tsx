import { Logout } from "@Store/actions/AuthActions";
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
        nombre:dataUser.name,
        correo:dataUser.email
      });
    }
    }, [Logged])

    const logout = () =>{
      dispatch(Logout())
    }
    


  return {
    state,
    onChange,
    logout
  } as const
}

export default usePerfil