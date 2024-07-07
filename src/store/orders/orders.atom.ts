import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { IInitState } from "../types";

export interface IOrdersItemProduct {
    id:string;
    name:string;
    image:string;
    description:string;
    price:number;
}

export interface IOrdersItem {
    id:string;
    product:IOrdersItemProduct;
    quantity:number;
}

export interface IOrders {
    id:string;
    items:IOrdersItem[];
}

export interface IOrdersState extends IInitState {
    orders:IOrders;
}

export const ordersInitState:IOrdersState = {
    status: "idle",
    orders: {
        id: "",
        items: []
    },
    message: ""
}

const ordersAtom = atom({
    key: "orders-atom",
    default: ordersInitState
})

export const useOrdersState = ()=> useRecoilState(ordersAtom);
export const useOrdersStateValue = ()=> useRecoilValue(ordersAtom);
export const useSetOrdersState = ()=> useSetRecoilState(ordersAtom);