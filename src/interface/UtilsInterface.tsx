import { ResultProduct } from "./ProducstListInterface"

export interface MoneyFormat {
    text: bigint | number,
    currency?:string,
    format?:string
}

export interface RequestProducts {
    isLoading:boolean,
    isError:boolean,
    isSuccess:boolean,
    data:ResultProduct
}