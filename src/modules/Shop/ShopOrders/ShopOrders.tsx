import styles from "./shoporders.module.css";
import { useEffect } from "react";
import { FetchOrdersAction } from "src/shared/api/orders.api";
import ComponentLoader from "src/shared/components/Loaders/ComponentLoader";
import ShopOrdersTable from "./ShopOrdersTable/ShopOrdersTable";
import Pagination from "src/shared/components/Pagination";
import { useShopOrdersState } from "src/store/shop/shopOrders/shopOrders.atom";

export default function ShopOrders() {

  const [shopOrdersState, setShopOrdersState] = useShopOrdersState();

  useEffect(()=> {
    setShopOrdersState(state => ({ ...state, status:"loading" }));

    FetchOrdersAction()
    .then((response)=> {
      setShopOrdersState(state => ({ 
          ...state, 
          ...response.data
      }))
    })
    .catch((error)=> {
        setShopOrdersState(state => ({
          ...state,
          status:"failed",
          message: error.message
        }))
    })
    .finally(()=> setShopOrdersState(state => ({ ...state, status:"idle" })))

  }, [setShopOrdersState])

  return (
    <div className={styles.shopOrdersContainer}>
      {
        shopOrdersState.status === "loading"
        ? <ComponentLoader />
        : <>
            <div className={styles.shopOrdersHeading}>Orders</div>
            <ShopOrdersTable orders={shopOrdersState.list} />
            <Pagination
              currentPage={shopOrdersState.currentPage}
              totalPages={shopOrdersState.totalPages}
              goToPageAction={(newPageNumber)=> setShopOrdersState(state => ({ ...state, currentPage: newPageNumber }))}
            />
          </>
      }
    </div>
  );
}
