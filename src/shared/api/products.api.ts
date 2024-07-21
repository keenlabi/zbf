import { getFetch, postFetch } from "src/shared/api/fetch"
import { INetworkResponse } from "./types";
import { IProductListItem } from "src/store/products/products.atom";
import { IProductCategory } from "src/store/products/productCategories/productCategories.atom";
import { IProduct } from "src/store/products/product.atom";

interface ICreateProductPayload {
    name:string;
    description:string;
    imageURL:string;
    price:number;
    categories:string[];
    quantity:number;
}
export function createProductAction(payload:ICreateProductPayload) {
    return new Promise<INetworkResponse<{products:IProduct[]}>>((resolve, reject)=> {
        postFetch<{products:IProduct[]}>(`/products`, payload)
        .then((response)=> resolve(response))
        .catch((error)=> reject(error))
    })
}

export function FetchProductCategoriesAction() {
    return new Promise<INetworkResponse<{categories:IProductCategory[]}>>((resolve, reject)=> {
        getFetch<{categories:IProductCategory[]}>(`/products/categories`)
        .then((response)=> resolve(response))
        .catch((error)=> reject(error))
    })
}

export function FetchProductsByCategoryAction(category:string ,currentPage:number) {
    return new Promise<INetworkResponse<{products:IProductListItem[]}>>((resolve, reject)=> {
        getFetch<{products:IProductListItem[]}>(`/products?category=${category}&page=${currentPage}`)
        .then((response)=> resolve(response))
        .catch((error)=> reject(error))
    })
}

export function FetchProductAction(productId:string) {
    return new Promise<INetworkResponse<{product:IProduct}>>((resolve, reject)=> {
        getFetch<{product:IProduct}>(`/products/${productId}`)
        .then((response)=> resolve(response))
        .catch((error)=> reject(error))
    })
}