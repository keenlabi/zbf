import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { IInitState } from "../types";

export interface IProduct {
    id:string;
    name:string;
    description:string;
    price:number;
    createdAt:string;
    updatedAt:string;
}

export interface IProductState extends IInitState {
    product:IProduct;
}

export const productInitState:IProductState = {
    status: "idle",
    product: {
        id: "",
        name: "",
        description: "",
        price: 0,
        createdAt: "",
        updatedAt: "",
    }
}

const productAtom = atom({
    key: "product-atom",
    default: productInitState
})

export const useProductsState = ()=> useRecoilState(productAtom);
export const useProductsStateValue = ()=> useRecoilValue(productAtom);
export const useSetProductsState = ()=> useSetRecoilState(productAtom);