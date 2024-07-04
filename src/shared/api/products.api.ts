import { getFetch } from "src/shared/api/fetch"
import { INetworkResponse } from "./types";
import { IProduct } from "src/store/products/products.atom";
import { IProductCategory } from "src/store/products/productCategories/productCategories.atom";

export function FetchProductCategoriesAction() {
    return new Promise<INetworkResponse<{categories:IProductCategory[]}>>((resolve, reject)=> {
        getFetch<{categories:IProductCategory[]}>(`/api/products/categories`)
        .then((response)=> resolve(response))
        .catch((error)=> reject(error))
    })
}

export function FetchProductsByCategoryAction(category:string ,currentPage:number) {
    return new Promise<INetworkResponse<{products:IProduct[]}>>((resolve, reject)=> {
        getFetch<{products:IProduct[]}>(`/api/products?category=${category}&page=${currentPage}`)
        .then((response)=> resolve(response))
        .catch((error)=> reject(error))
    })
}

export function FetchProductAction(productId:string) {
    return new Promise<INetworkResponse<{product:IProduct}>>((resolve, reject)=> {
        getFetch<{product:IProduct}>(`/api/product/${productId}`)
        .then((response)=> resolve(response))
        .catch((error)=> reject(error))
    })
}