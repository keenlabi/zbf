import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { IInitState } from "../../types";

export interface IProductCategory {
    id:string;
    name:string;
}

export interface IProductCategoriesState extends IInitState {
    categories:IProductCategory[];
    activeCategory:string;
}

export const productCategoriesInitState:IProductCategoriesState = {
    status: "idle",
    categories: [],
    activeCategory: "",
    message: ""
}

const productCategoriesAtom = atom({
    key: "product-categories-atom",
    default: productCategoriesInitState
})

export const useProductCategoriesState = ()=> useRecoilState(productCategoriesAtom);
export const useProductCategoriesStateValue = ()=> useRecoilValue(productCategoriesAtom);
export const useSetProductCategoriesState = ()=> useSetRecoilState(productCategoriesAtom);