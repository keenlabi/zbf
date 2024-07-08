import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { IInitState } from "../types";

export type IOrderStatus = "PENDING"|"PROCESSING"|"SHIPPING"|"DELIVERED";

export interface IOrderItem {
    id:string;
    status:IOrderStatus;
    itemCount:number;
    total:number;
    createdAt:string;
}

export interface IOrdersState extends IInitState {
    orders:IOrderItem[];
}

export const ordersInitState:IOrdersState = {
    status: "idle",
    message: "",
    orders: []
}

const ordersAtom = atom({
    key: "orders-atom",
    default: ordersInitState
})

export const useOrdersState = ()=> useRecoilState(ordersAtom);
export const useOrdersStateValue = ()=> useRecoilValue(ordersAtom);
export const useSetOrdersState = ()=> useSetRecoilState(ordersAtom);