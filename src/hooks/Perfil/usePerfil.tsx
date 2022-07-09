import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import useForm from "../useForm"

const usePerfil = () => {
    const {Auth:{facebookLogin}} = useSelector((x:RootState)=>x);
    const {nombre,onChange,state} = useForm({
        nombre:facebookLogin.name,
        correo:facebookLogin.email
    });


  return {
    state,
    onChange
  } as const
}

export default usePerfil