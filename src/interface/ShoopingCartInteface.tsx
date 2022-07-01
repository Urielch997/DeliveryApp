
import { Content } from "./ProducstListInterface";
import { AddProduct } from "./types/ShoopingCartType";

export interface ActionInterface {
    type:AddProduct,
    payload:Content
}