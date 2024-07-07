import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { IInitState } from "../types";

export interface IOrderItemProduct {
    id:string;
    name:string;
    image:string;
    description:string;
    price:number;
}

export interface IOrderItem {
    id:string;
    product:IOrderItemProduct;
    quantity:number;
}

export interface IOrder {
    id:string;
    items:IOrderItem[];
}

export interface IOrderState extends IInitState {
    order:IOrder;
}

export const orderInitState:IOrderState = {
    status: "idle",
    order: {
        id: "",
        items: []
    },
    message: ""
}

const orderAtom = atom({
    key: "order-atom",
    default: orderInitState
})

export const useOrderState = ()=> useRecoilState(orderAtom);
export const useOrderStateValue = ()=> useRecoilValue(orderAtom);
export const useSetOrderState = ()=> useSetRecoilState(orderAtom);