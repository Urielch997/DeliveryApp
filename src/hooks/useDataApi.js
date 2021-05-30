import React,{useState} from 'react';

const useDataApi = (url) =>{
    const initialState = {
        isSuccess:false,
        isError:false,
        isLoading:false,
        data:[],
        message:''
    }

    const [state,setState] = useState(initialState);

    const getData = async (url,method,body,headers) =>{
        try{
        setState({...initialState,isLoading:true});
        let result = await fetch(url,{
            method,
            body,
            headers
        })

        setState({
            ...initialState,
            isLoading:false,
            isSuccess:true,
            data:result,
            message:null
        })
    }catch (e){
        setState({
            ...initialState,
            isError:true,
            isLoading:false,
            isSuccess:false
        })
    }
    }


    return [state,getData]
}

export default useDataApi;