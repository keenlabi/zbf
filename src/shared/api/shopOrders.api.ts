import { patchFetch } from "./fetch"
import { INetworkResponse } from "./types"

export function UpdateOrderStatusAction(orderId:string, newStatus:string) {
    return new Promise<INetworkResponse<object>>((resolve, reject)=> {
        patchFetch<object>(`/orders/${orderId}/status`, { newStatus })
        .then((response)=> resolve(response))
        .catch((error)=> reject(error))
    })
}