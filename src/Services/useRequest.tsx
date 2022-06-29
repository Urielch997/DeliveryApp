
import { useState } from 'react'



const useRequest = <T extends Object>(dataParameter?: T) => {
    const [state, setState] = useState({
        isSuccess: false,
        isError: false,
        isLoading: false,
        data: dataParameter,
        message: ""
    });

    const fetchData = async (url: string, method: string | "GET") => {
        setState({ ...state, isLoading: true, isSuccess: false });


        fetch(url, { method }).then((x) =>
            x.json()
        ).then((x) => {
            console.log(x)
            if(x.code === "00"){
            setState({
                ...state,
                data: x.result,
                message:x.message,
                isSuccess: true,
                isError:false,
                isLoading:false
            })
        }else{
            setState({
                ...state,
                data: x.result,
                message:x.message,
                isSuccess: false,
                isError:true,
                isLoading:false
            })
        }
        }).catch((x)=>{
            setState({
                ...state,
                data: x.result,
                isSuccess: false,
                isError:true,
                isLoading:false,
                message:"Error al realizar la operacion"
            })
        })



    }

    return [state, fetchData] as const;
}

export default useRequest
