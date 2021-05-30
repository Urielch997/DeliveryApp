import {useState,useEffect} from 'react';


const useDirection = () =>{
    const [direccion,setDireccion] = useState('');

    return [setDireccion,direccion];
}

export default useDirection;