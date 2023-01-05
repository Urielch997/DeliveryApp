import { CategoriaType } from "@/interface/types/CategoriaType";
import { getAllCategoriaUrl } from "@/Services/Paths";
import { requestApi } from "@/Services/Request";
import { initialStateCategoria } from "../reducer/MenuCategoriaReduce";
import { Dispatch } from "react";




export const getAllCategoria = () => async (dispatch: Dispatch<any>) => {
  dispatch({ type: CategoriaType.GET_ALL_CAT, payload: { ...initialStateCategoria, isLoading: true,isSuccess: false,isError:false  } })
  let response = await requestApi(getAllCategoriaUrl());
  if (response.code === "00") {
        dispatch({ type: CategoriaType.GET_ALL_CAT, payload: { ...initialStateCategoria, isSuccess: true,isError:false,isLoading:false, data: response.result } })
  } else {
      dispatch({ type: CategoriaType.GET_ALL_CAT, payload: { ...initialStateCategoria, isError: true,isSuccess: false,isLoading:false, data: [] } })
  }
}




