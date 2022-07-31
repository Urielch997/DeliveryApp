import { Content } from "@Interface/ProducstListInterface";
import { getUrlParameter } from "@Utils/Tools/Utils";
import { useEffect, useState } from "react"

const useHome = () => {
    const [CardSelected, setCardSelected] = useState<Content>();
    const [seeDetail, setSeeDetail] = useState<Boolean>(false)


useEffect(()=>{
    const getParameters = () =>{
        let token = getUrlParameter('token');
        let error = getUrlParameter('error'); 

        if(token !== ""){
            localStorage.setItem("token",token)
        }
    }

    getParameters();
},[])

const SeeDetail = (data: Content) => {
    setCardSelected(data);
    setSeeDetail(true)
}


  return {
    seeDetail,
    SeeDetail,
    CardSelected,
    setSeeDetail
  }
}

export default useHome