import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { IInitState } from "src/store/types";

export interface IShopCustomer {
    id:string;
    email:string;
    createdAt:string;
}

export interface IShopCustomersState extends IInitState {
    list:IShopCustomer[];
    currentPage:number;
    totalPages:number;
}

export const shopCustomersInitState:IShopCustomersState = {
    status: "idle",
    message: "",
    list: [],
    currentPage: 1,
    totalPages: 1
}

const shopCustomersAtom = atom({
    key: "shop-customer-atom",
    default: shopCustomersInitState
})

export const useShopCustomersState = ()=> useRecoilState(shopCustomersAtom);
export const useShopCustomersStateValue = ()=> useRecoilValue(shopCustomersAtom);
export const useSetShopCustomersState = ()=> useSetRecoilState(shopCustomersAtom);