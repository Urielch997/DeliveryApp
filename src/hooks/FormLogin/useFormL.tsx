import { loadScript } from "@/utils/Tools/Utils"
import { LoginType } from "@Interface/types/LoginTypes"
import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"

const useFormL = () => {
    const [checked, setChecked] = useState(false)
    const [typeForm, setTypeForm] = useState<LoginType>("LOGIN")
    const dispatch = useDispatch();
    const googleButton = useRef(null);


    const changeType = (type: LoginType) => {
        setTypeForm(type)
    }

    const googleAuthLoad = () => {
        const src = 'https://accounts.google.com/gsi/client'
        const id = "300939693403-0koo4liitkcnqve45v714ufb4mdqisjt.apps.googleusercontent.com"

        loadScript(src)
            .then(() => {
                /*global google*/
                console.log(window.google)
                window.google.accounts.id.initialize({
                    client_id: id,
                    callback: handleCredentialResponse
                })
                window.google.accounts.id.renderButton(
                    googleButton.current,
                    { theme: 'outline', size: 'large' }
                )
            })
            .catch(console.error)

        return () => {
            const scriptTag = document.querySelector(`script[src="${src}"]`)
            if (scriptTag) document.body.removeChild(scriptTag)
        }
    }

    const handleCredentialResponse = (response: any) => {
        console.log("Encoded JWT ID token: ", response);
    }

    return {
        setChecked,
        checked,
        typeForm,
        changeType,
        googleButton,
        googleAuthLoad
    } as const
}

export default useFormL