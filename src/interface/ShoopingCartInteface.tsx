
import { ContentFav, Pageable, Sort } from "./CardFavInterface";
import { FavAction } from "./types/FavTypes";
import { AddProduct } from "./types/ShoopingCartType";

export interface ActionInterface {
    type:FavAction,
    payload:any
}

export interface RequestPageableGenericFav {
    isLoading:boolean,
    isError:boolean,
    isSuccess:boolean,
    data:ResultGenericFav
}

export interface ResultGenericFav {
    content:          ContentFav[];
    pageable:         Pageable;
    totalPages:       number;
    totalElements:    number;
    last:             boolean;
    numberOfElements: number;
    size:             number;
    first:            boolean;
    number:           number;
    sort:             Sort;
    empty:            boolean;
}