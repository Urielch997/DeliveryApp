import { cleanup } from '@testing-library/react';
import {useState,useEffect} from 'react';

const useClick = () =>{
    const[seleccionado,setSeleccionado] = useState(false);
    const[elegir,setElegir] = useState("");


    useEffect(()=>{
        if(elegir !== ""){
         setSeleccionado(true) 
        }else{
         setSeleccionado(false)
        }
    },[elegir])



    return[setElegir,seleccionado,elegir,setSeleccionado];
}

export default useClick;