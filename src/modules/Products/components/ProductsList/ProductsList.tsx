import styles from "./productslist.module.css";
import { useEffect, useState } from "react";
import { FetchProductsByCategoryAction } from "src/shared/api/products.api";
import DataLoadingError from "src/shared/components/DataLoadingError";
import GridList from "src/shared/components/List/GridList";
import CircularRingLoader from "src/shared/components/Loaders/CircularRingLoader";
import Pagination from "src/shared/components/Pagination";
import ProductCard from "src/shared/components/ProductCard";
import { useProductCategoriesStateValue } from "src/store/products/productCategories/productCategories.atom";
import { useProductsState } from "src/store/products/products.atom";

export default function ProductsList() {

  const productCategoriesState = useProductCategoriesStateValue();
  const [productsState, setProductsState] = useProductsState();

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  // const [networkResponse, setNetworkResponse] = useState<INetworkResponse<{products:IProductListItem[]}>>();

  useEffect(()=> {
    setIsLoading(true);
    FetchProductsByCategoryAction(productCategoriesState.activeCategory, productsState.products.currentPage)
    .then((response)=> setProductsState(state => ({
      ...state,
      products: {
        ...state.products,
        list: response.data.products
      }
    })))
    .catch((error)=> setErrorMessage(error.message))
    .finally(()=> setIsLoading(false))

  }, [productCategoriesState.activeCategory, productsState.products.currentPage, setProductsState])

  function paginate(newPage:number) {
    setProductsState(state=> ({
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
        : productsState.products.list.length
          ? <GridList columnCount={4}>
              {
                productsState.products.list?.map((product) => {
                  return  <ProductCard
                            key={product.id} 
                            id={product.id} 
                            name={product.name} 
                            description={product.description} 
                            image={product.image}
                            price={product.price ?? "500"}
                          />
                })
              }
            </GridList>
          : <div> No products found for this category </div>
      }

      <Pagination
        currentPage={productsState.products.currentPage}
        totalPages={productsState.products.totalPages}
        goToPageAction={(newPage:number)=> paginate(newPage)}
      />
    </div> 
  );
}
