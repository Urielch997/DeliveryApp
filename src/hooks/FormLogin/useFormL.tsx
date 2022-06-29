import React from 'react'
import { useState } from "react"

const useFormL = () => {
    const [checked,setChecked] = useState(false)

    return {
        setChecked,
        checked
    } as const
}

export default useFormL