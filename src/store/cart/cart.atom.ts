import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { IInitState } from "../types";

export interface ICartItemProduct {
    id:string;
    name:string;
    image:string;
    description:string;
    price:number;
}

export interface ICartItem {
    id:string;
    product:ICartItemProduct;
    quantity:number;
}

export interface ICart {
    id:string;
    items:ICartItem[];
}

export interface ICartState extends IInitState {
    cart:ICart;
}

export const cartInitState:ICartState = {
    status: "idle",
    cart: {
        id: "",
        items: []
    },
    message: ""
}

const cartAtom = atom({
    key: "cart-atom",
    default: cartInitState
})

export const useCartState = ()=> useRecoilState(cartAtom);
export const useCartStateValue = ()=> useRecoilValue(cartAtom);
export const useSetCartState = ()=> useSetRecoilState(cartAtom);