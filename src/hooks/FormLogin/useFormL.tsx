import { facebookLogin } from "@Store/actions/AuthActions"
import { LoginType } from "@Interface/types/LoginTypes"
import { useState } from "react"
import { useDispatch } from "react-redux"

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

    return {
        setChecked,
        checked,
        typeForm,
        changeType,
        LoginFacebook
    } as const
}

export default useFormL