import { Content } from "./ProducstListInterface";

export interface CardFavInterface {
    data:ContentFav,
    action:(e:Content)=>void
}

export interface Producto {
    idItem: number;
    nombre: string;
    idCategoria: number;
    precio: number;
    precioOferta: number;
    imagen:  string;
    description: string;
    favorito:boolean;
}

export interface Usuario {
    idUser: number;
    userName: string;
    email: string;
}

export interface ContentFav {
    producto: Producto;
    usuario: Usuario;
}

export interface Sort {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
}

export interface Pageable {
    sort: Sort;
    pageSize: number;
    pageNumber: number;
    offset: number;
    paged: boolean;
    unpaged: boolean;
}

export interface ResultFav {
    content: ContentFav[];
    pageable: Pageable;
    last: boolean;
    totalPages: number;
    totalElements: number;
    first: boolean;
    numberOfElements: number;
    size: number;
    number: number;
    sort: Sort2;
    empty: boolean;
}

export interface Sort2 {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
}