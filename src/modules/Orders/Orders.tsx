import OrdersTable from "src/modules/Orders/components/OrdersTable";
import styles from "./orders.module.css";
import { useEffect, useState } from "react";
import { FetchOrdersAction } from "src/shared/api/orders.api";
import { useOrdersState } from "src/store/orders/orders.atom";
import ComponentLoader from "src/shared/components/Loaders/ComponentLoader";
import Pagination from "src/shared/components/Pagination";
import EmptyList from "src/shared/components/EmptyList/EmptyList";

export default function Orders() {

  const [ordersState, setOrdersState] = useOrdersState();
  const [fetchOrdersState, setFetchOrdersState] = useState(ordersState);

  useEffect(()=> {
    setFetchOrdersState(state => ({ ...state, status:"loading" }));

    FetchOrdersAction()
    .then((response)=> {
      setOrdersState(state => ({ ...state, ...response.data }));
      setFetchOrdersState(state => ({ ...state, status:"success" }));
    })
    .catch(()=> setFetchOrdersState(state=> ({ ...state, status: "failed" })))

  }, [setOrdersState])

  return (
    <div className={styles.ordersContainer}>
      {
        fetchOrdersState.status === "loading"
        ? <ComponentLoader />
        : <>
            <div className={styles.ordersHeading}>Orders</div>
            {
              ordersState.list.length
              ? <>
                  <OrdersTable orders={ordersState.list} />
                  <Pagination
                    currentPage={ordersState.currentPage}
                    totalPages={ordersState.totalPages}
                    goToPageAction={(newPageNumber)=> setOrdersState(state => ({ ...state, currentPage: newPageNumber }))}
                  />
                </>
              : <EmptyList
                  message={"You have no orders, start shopping now"}
                  path={"/products"} 
                />
            }
          </>
      }
    </div>
  );
}
