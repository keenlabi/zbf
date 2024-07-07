import styles from "./productslist.module.css";
import { useEffect, useState } from "react";
import { FetchProductsByCategoryAction } from "src/shared/api/products.api";
import { INetworkResponse } from "src/shared/api/types";
import DataLoadingError from "src/shared/components/DataLoadingError";
import GridList from "src/shared/components/List/GridList";
import CircularRingLoader from "src/shared/components/Loaders/CircularRingLoader";
import Pagination from "src/shared/components/Pagination";
import ProductCard from "src/shared/components/ProductCard";
import { useProductCategoriesStateValue } from "src/store/products/productCategories/productCategories.atom";
import { IProductListItem, useProductsState } from "src/store/products/products.atom";

export default function ProductsList() {

  const productCategoriesState = useProductCategoriesStateValue();
  const [productState, setProductState] = useProductsState();

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [networkResponse, setNetworkResponse] = useState<INetworkResponse<{products:IProductListItem[]}>>();

  useEffect(()=> {
    setIsLoading(true);
    FetchProductsByCategoryAction(productCategoriesState.activeCategory, productState.products.currentPage)
    .then((response)=> setNetworkResponse(response))
    .catch((error)=> setErrorMessage(error.message))
    .finally(()=> setIsLoading(false))

  }, [productCategoriesState.activeCategory, productState.products.currentPage])

  function paginate(newPage:number) {
    setProductState(state=> ({
      ...state,
      products:{
        ...state.products,
        currentPage: newPage
      }
    }))
  }

  return (
    <div className={styles.productsList}>
    
      { errorMessage && <DataLoadingError message={errorMessage} /> }

      {
        isLoading
        ? <CircularRingLoader color={"red"} />
        : networkResponse?.statusCode === 200 &&
            <GridList columnCount={4}>
              {
                networkResponse.data.products?.map((product) => {
                  return  <ProductCard 
                            key={product.id} 
                            id={product.id} 
                            name={product.name} 
                            description={product.description} 
                            image={""}
                            price={product.price ?? "500"}
                          />
                })
              }
            </GridList>
      }

      <Pagination
        currentPage={productState.products.currentPage}
        totalPages={productState.products.totalPages}
        goToPageAction={(newPage:number)=> paginate(newPage)}
      />
    </div> 
  );
}
