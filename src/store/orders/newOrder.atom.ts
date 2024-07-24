import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { IInitState } from "../types";

export interface IOrderState extends IInitState {
    newOrder:{
        address:string;
        contact:string;
        totalPrice:number;
    }
}

export const newOrderInitState:IOrderState = {
    status: "idle",
    message: "",
    newOrder: {
        address: "",
        contact: "",
        totalPrice: 0
    }
}

const newOrderAtom = atom({
    key: "new-order-atom",
    default: newOrderInitState
})

export const useNewOrderState = ()=> useRecoilState(newOrderAtom);
export const useNewOrderStateValue = ()=> useRecoilValue(newOrderAtom);
export const useSetNewOrderState = ()=> useSetRecoilState(newOrderAtom);