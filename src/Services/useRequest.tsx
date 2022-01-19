import React, { useState } from 'react'

interface Request{
    isSuccess:boolean,
    isError:boolean,
    isLoading:boolean,
    data:null | object | undefined,
    message:string
}

const useRequest = <T extends Object>(data?:T) =>{
    const [state,setState] = useState({
        isSuccess:false,
        isError:false,
        isLoading:false,
        data:data,
        message:""
    });

    const fetchData = (url:String,method:String | "GET") =>{
        return state;
    }

    return [state,fetchData] as const;
}

export default useRequest
