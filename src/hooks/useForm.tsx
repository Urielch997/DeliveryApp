import { useState } from 'react';

const useForm =<T extends Object> (formulario:T) => {
    const [state,setSate] = useState(formulario);

    const onChange = (value:string,campo: keyof T) =>{
        setSate({...state,[campo]:value})
    }

    const SaveEach = (campos:Object) =>{
        setSate({...state,...campos})
    }

    return {
        ...state,
        state,
        onChange,
        SaveEach
    }
}

export default useForm;
