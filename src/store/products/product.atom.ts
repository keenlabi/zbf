import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { IInitState } from "../types";

export interface IProduct {
    id:string;
    image:string;
    name:string;
    description:string;
    inventory:{
        id:string;
        quantity:number
    }
    price:number;
    categories:string[];
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
        categories: [],
        inventory: {
            id: "",
            quantity: 0
        },
        image: ""
    },
    message: ""
}

const productAtom = atom({
    key: "product-atom",
    default: productInitState
})

export const useProductState = ()=> useRecoilState(productAtom);
export const useProductStateValue = ()=> useRecoilValue(productAtom);
export const useSetProductState = ()=> useSetRecoilState(productAtom);