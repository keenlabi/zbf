import styles from "./productcategoriessidebar.module.css";
import CircularRingLoader from "src/shared/components/Loaders/CircularRingLoader";
import { useEffect, useState } from "react";
import { FetchProductCategoriesAction } from "src/shared/api/products.api";
import { INetworkResponse } from "src/shared/api/types";
import { IProductCategory, useProductCategoriesState } from "src/store/products/productCategories/productCategories.atom";
import DataLoadingError from "src/shared/components/DataLoadingError";

export default function ProductCategoriesSideBar() {
  
  const [productCategoriesState, setProductCategoriesState] = useProductCategoriesState();

  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [networkResponse, setNetworkResponse] = useState<INetworkResponse<{categories:IProductCategory[]}>>();
  
  useEffect(()=> {
    FetchProductCategoriesAction()
    .then((response)=> setNetworkResponse(response))
    .catch((error)=> setErrorMessage(error.message))
    .finally(()=> setIsLoading(false))
  }, [])

  function setActiveCategory(selectedCategory:string) {
    setProductCategoriesState(state => ({ ...state, activeCategory: selectedCategory }))
  }

  return (
    <div className={styles.sidebar_wrapper} style={{width: "20%"}}>
      
      { isLoading && <CircularRingLoader color={"red"} /> }

      { errorMessage && <DataLoadingError message={errorMessage} /> }

      {
        networkResponse?.statusCode === 200 && 
        <div className={styles.productCategoriesList}>
          <div 
            className={`
              ${styles.productCategory}
              ${ 
                productCategoriesState.activeCategory === ""
                ? styles._active : null
              }
            `}
            onClick={()=> setActiveCategory("")}
          > All </div>
          {
            networkResponse.data.categories?.map((category, index) => {
              return  <div 
                        key={index}
                        className={`
                          ${ styles.productCategory }
                          ${ 
                            category.name === productCategoriesState.activeCategory 
                            ? styles._active : null
                          }
                        `}
                        onClick={()=> setActiveCategory(category.name)}
                      > 
                        { category.name } 
                      </div>
            })
          }
        </div>
      }
    </div>
  );
}
