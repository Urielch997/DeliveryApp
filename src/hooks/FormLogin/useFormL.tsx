import { loadScript } from "@/utils/Tools/Utils"
import { LoginType } from "@Interface/types/LoginTypes"
import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"

const useFormL = () => {
    const [checked, setChecked] = useState(false)
    const [typeForm, setTypeForm] = useState<LoginType>("LOGIN")
    const googleButton = useRef(null);


    const changeType = (type: LoginType) => {
        setTypeForm(type)
    }

    return {
        setChecked,
        checked,
        typeForm,
        changeType,
        googleButton
    } as const
}

export default useFormL