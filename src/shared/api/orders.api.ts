import { postFetch } from "src/shared/api/fetch"
import { INetworkResponse } from "./types";
import { ICart } from "src/store/cart/cart.atom";

interface ICreateOrder {
    address:string;
    contact:string;
}

export function CreateOrderAction(payload:ICreateOrder) {
    return new Promise<INetworkResponse<{cart:ICart}>>((resolve, reject)=> {
        postFetch<{cart:ICart}>(`/api/orders`,payload)
        .then((response)=> resolve(response))
        .catch((error)=> reject(error))
    })
}