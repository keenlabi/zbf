import { getFetch, patchFetch, postFetch } from "src/shared/api/fetch"
import { INetworkResponse } from "./types";
import { ICart } from "src/store/cart/cart.atom";

export function IncreaseCartItemQuantityAction(itemId:string) {
    return new Promise<INetworkResponse<{cart:ICart}>>((resolve, reject)=> {
        patchFetch<{cart:ICart}>(`/cart/item/${itemId}/quantity/increase`, {})
        .then((response)=> resolve(response))
        .catch((error)=> reject(error))
    })
}

export function DecreaseCartItemQuantityAction(itemId:string) {
    return new Promise<INetworkResponse<{cart:ICart}>>((resolve, reject)=> {
        patchFetch<{cart:ICart}>(`/cart/item/${itemId}/quantity/decrease`, {})
        .then((response)=> resolve(response))
        .catch((error)=> reject(error))
    })
}

export function FetchCartAction() {
    return new Promise<INetworkResponse<{cart:ICart}>>((resolve, reject)=> {
        getFetch<{cart:ICart}>(`/cart`)
        .then((response)=> resolve(response))
        .catch((error)=> reject(error))
    })
}

export function AddToCartAction(productId:string) {
    return new Promise<INetworkResponse<{cart:ICart}>>((resolve, reject)=> {
        postFetch<{cart:ICart}>(`/cart/${productId}`, {})
        .then((response)=> resolve(response))
        .catch((error)=> reject(error))
    })
}