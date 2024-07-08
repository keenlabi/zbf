import { useFetchProductCategories } from "src/store/products/productCategories/productCategories.selector"

export default function useProductCategories() {

    const FetchProductCategories = useFetchProductCategories();

    return {
        FetchProductCategories
    }
}