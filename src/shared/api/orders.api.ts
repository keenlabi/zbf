import { getFetch, postFetch } from "src/shared/api/fetch"
import { INetworkResponse } from "./types";
import { ICart } from "src/store/cart/cart.atom";
import { IOrderItem } from "src/store/orders/orders.atom";

interface IFetchOrdersNetworkResposne {
    list:IOrderItem[];
    currentPage:number;
    totalPages:number;
}

export function FetchOrdersAction() {
    return new Promise<INetworkResponse<IFetchOrdersNetworkResposne>>((resolve, reject)=> {
        getFetch<IFetchOrdersNetworkResposne>(`/orders`)
        .then((response)=> resolve(response))
        .catch((error)=> reject(error))
    })
}

interface ICreateOrder {
    address:string;
    contact:string;
}

export function CreateOrderAction(payload:ICreateOrder) {
    return new Promise<INetworkResponse<{cart:ICart}>>((resolve, reject)=> {
        postFetch<{cart:ICart}>(`/orders`,payload)
        .then((response)=> resolve(response))
        .catch((error)=> reject(error))
    })
}