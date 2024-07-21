import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { IInitState } from "../types";

export interface IProductListItem {
    id:string;
    image:string;
    name:string;
    description:string;
    price:number;
    createdAt:string;
    updatedAt:string;
}

export interface IProductsState extends IInitState {
    products:{
        list:IProductListItem[];
        currentPage:number;
        totalPages:number;
    }
}

export const productsInitState:IProductsState = {
    status: "idle",
    products: {
        list: [],
        currentPage: 1,
        totalPages: 1
    },
    message: ""
}

const productsAtom = atom({
    key: "products-atom",
    default: productsInitState
})

export const useProductsState = ()=> useRecoilState(productsAtom);
export const useProductsStateValue = ()=> useRecoilValue(productsAtom);
export const useSetProductsState = ()=> useSetRecoilState(productsAtom);