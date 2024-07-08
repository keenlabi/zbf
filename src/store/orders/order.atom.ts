import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { IInitState } from "../types";

export interface IOrderItem {
    id:string;
    status:string;
    itemCount:number;
    totalAmount:number;
    createdAt:string;
}

export interface IOrderState extends IInitState {
    order:IOrderItem;
}

export const orderInitState:IOrderState = {
    status: "idle",
    message: "",
    order: {
        id: "",
        status: "",
        itemCount: 0,
        totalAmount: 0,
        createdAt: ""
    }
}

const orderAtom = atom({
    key: "order-atom",
    default: orderInitState
})

export const useOrderState = ()=> useRecoilState(orderAtom);
export const useOrderStateValue = ()=> useRecoilValue(orderAtom);
export const useSetOrderState = ()=> useSetRecoilState(orderAtom);