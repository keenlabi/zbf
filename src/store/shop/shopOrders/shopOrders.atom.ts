import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { IInitState } from "src/store/types";

export type IShopOrderStatus = "PENDING"|"PROCESSING"|"SHIPPING"|"DELIVERED";

export interface IShopOrderItem {
    id:string;
    status:IShopOrderStatus;
    itemCount:number;
    total:number;
    createdAt:string;
}

export interface IShopOrdersState extends IInitState {
    list:IShopOrderItem[];
    currentPage:number;
    totalPages:number;
}

export const shopOrdersInitState:IShopOrdersState = {
    status: "idle",
    message: "",
    list: [],
    currentPage: 1,
    totalPages: 1
}

const shopOrdersAtom = atom({
    key: "shop-orders-atom",
    default: shopOrdersInitState
})

export const useShopOrdersState = ()=> useRecoilState(shopOrdersAtom);
export const useShopOrdersStateValue = ()=> useRecoilValue(shopOrdersAtom);
export const useSetShopOrdersState = ()=> useSetRecoilState(shopOrdersAtom);