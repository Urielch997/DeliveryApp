// Generated by https://quicktype.io

import { ActionsProductTypes } from "./types/ProductsType";

export interface ProductsList {
    code:    string;
    message: string;
    result:  ResultGeneric;
}

export interface ResultGeneric {
    content:          Content[];
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

export interface Content {
    idItem:       number;
    nombre:       string;
    idCategoria:  number;
    precio:       number | string;
    precioOferta: number | string;
    imagen:      string;
    description: string | null;
    favorito:boolean
}

export interface Pageable {
    sort:       Sort;
    pageNumber: number;
    pageSize:   number;
    offset:     number;
    paged:      boolean;
    unpaged:    boolean;
}

export interface Sort {
    sorted:   boolean;
    unsorted: boolean;
    empty:    boolean;
}

export interface ProductsAction {
    type:ActionsProductTypes,
    payload:RequestPageableGeneric
}

export interface RequestPageableGeneric {
    isLoading:boolean,
    isError:boolean,
    isSuccess:boolean,
    data:ResultGeneric
}
