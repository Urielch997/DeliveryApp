import { useState } from 'react';

const useForm =<T extends Object> (formulario:T) => {
    const [state,setSate] = useState(formulario);

    const onChange = (value:string,campo: keyof T) =>{
        setSate({...formulario,[campo]:value})
    }

    const SaveEach = (campos:Object) =>{
        setSate({...formulario,...campos})
    }

    return {
        ...state,
        state,
        onChange,
        SaveEach
    }
}

export default useForm;
