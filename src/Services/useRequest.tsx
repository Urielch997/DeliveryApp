
import { useState } from 'react'



const useRequest = <T extends Object>(dataParameter?:T) =>{
    const [state,setState] = useState({
        isSuccess:false,
        isError:false,
        isLoading:false,
        data:dataParameter,
        message:""
    });

    const fetchData = async (url:string,method:string | "GET") =>{
        setState({...state,isLoading:true,isSuccess:false});
  
        
        let response = await fetch(url,{method})
        let data = await response.json();
        setState({
            ...state,
            data:data,
            isSuccess:true
        })

        
    }

    return [state,fetchData] as const;
}

export default useRequest
