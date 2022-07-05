import { LoginType } from "@interface/types/LoginTypes"
import { useState } from "react"

const useFormL = () => {
    const [checked,setChecked] = useState(false)
    const [typeForm,setTypeForm] = useState<LoginType>("LOGIN")

    const changeType = (type:LoginType) =>{
        setTypeForm(type)
    }

    return {
        setChecked,
        checked,
        typeForm,
        changeType
    } as const
}

export default useFormL