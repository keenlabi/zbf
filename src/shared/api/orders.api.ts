import { getFetch, postFetch } from "src/shared/api/fetch"
import { INetworkResponse } from "./types";
import { ICart } from "src/store/cart/cart.atom";
import { IOrderItem } from "src/store/orders/orders.atom";

export function FetchOrdersAction() {
    return new Promise<INetworkResponse<{orders:IOrderItem[]}>>((resolve, reject)=> {
        getFetch<{orders:IOrderItem[]}>(`/orders`)
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