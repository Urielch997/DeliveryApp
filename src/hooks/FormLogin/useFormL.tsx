import { facebookLogin, GoogleLogin, isLogin } from "@Store/actions/AuthActions"
import { LoginType } from "@Interface/types/LoginTypes"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { GoogleAuthInterface } from "@/interface/AuthInterface"

const useFormL = () => {
    const [checked,setChecked] = useState(false)
    const [typeForm,setTypeForm] = useState<LoginType>("LOGIN")
    const dispatch = useDispatch();

    const changeType = (type:LoginType) =>{
        setTypeForm(type)
    }

    const LoginFacebook = () =>{
        dispatch(facebookLogin())
    }

    const LoginGoogle = (response:Object) =>{
        console.log(response)
        dispatch(GoogleLogin(response));
    }

    return {
        setChecked,
        checked,
        typeForm,
        changeType,
        LoginFacebook,
        LoginGoogle
    } as const
}

export default useFormL