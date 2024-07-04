import { selector, useRecoilValue } from "recoil";
import { FetchProductCategoriesAction } from "src/shared/api/products.api";
import { ISelectorData } from "src/store/types";
import { IProductCategory, productCategoriesInitState } from "./productCategories.atom";

const FetchProductCategoriesSelector = selector<ISelectorData<{categories:IProductCategory[]}>>({
    key:"fetch-product-categories",
    get: async function ():Promise<ISelectorData<{categories:IProductCategory[]}>> {
        return await FetchProductCategoriesAction()
        .then((networkResponse)=> ({
            error: false,
            message: networkResponse.message,
            data: { categories: networkResponse.data.categories }
        }))
        .catch((error)=> ({
            error: false,
            message: error.message,
            data: { categories: productCategoriesInitState.categories }
        }))
    }
})
export const useFetchProductCategories = ()=> useRecoilValue(FetchProductCategoriesSelector)