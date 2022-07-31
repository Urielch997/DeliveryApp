import { GetDataUser } from "@Store/actions/AuthActions";
import { Content } from "@Interface/ProducstListInterface";
import { getUrlParameter } from "@Utils/Tools/Utils";
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";

const useHome = () => {
    const [CardSelected, setCardSelected] = useState<Content>();
    const [seeDetail, setSeeDetail] = useState<Boolean>(false);
    const dispatch = useDispatch();


useEffect(()=>{
    const getParameters = () =>{
        let token = getUrlParameter('token');
        let error = getUrlParameter('error'); 

        if(token !== ""){
            localStorage.setItem("token",token)
            dispatch(GetDataUser());
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