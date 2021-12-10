import { useState } from 'react';

const useForm =<T extends Object> (formulario:T) => {
    const [state,setSate] = useState(formulario);

    const onChange = (value:string,campo: keyof T) =>{
        setSate({...formulario,[campo]:value})
    } 

    return {
        ...state,
        state,
        onChange
    }
}

export default useForm;
