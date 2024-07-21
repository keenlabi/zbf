import { IShopCustomer } from "src/store/shop/shopCustomers/shopCustomers.atom"
import { getFetch } from "./fetch"
import { INetworkResponse } from "./types"

interface IFetchShopCustomer {
    list:IShopCustomer[];
    currentPage:number;
    totalPages:number;
}

export function FetchShopCustomersAction(currentPage:number) {
    return new Promise<INetworkResponse<IFetchShopCustomer>>((resolve, reject)=> {
        getFetch<IFetchShopCustomer>(`/customers/?page=${currentPage}`)
        .then((response)=> resolve(response))
        .catch((error)=> reject(error))
    })
}