import OrdersTable from "src/modules/Orders/components/OrdersTable";
import styles from "./orders.module.css";
import { useEffect, useState } from "react";
import { FetchOrdersAction } from "src/shared/api/orders.api";
import { useOrdersState } from "src/store/orders/orders.atom";
import ComponentLoader from "src/shared/components/Loaders/ComponentLoader";

export default function Orders() {

  const [ordersState, setOrdersState] = useOrdersState();
  const [fetchOrdersState, setFetchOrdersState] = useState(ordersState);

  useEffect(()=> {
    setFetchOrdersState(state => ({ ...state, status:"loading" }));

    FetchOrdersAction()
    .then((response)=> {
      setOrdersState(state => ({ ...state, orders: response.data.orders }));
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
            <OrdersTable orders={ordersState.orders} />
          </>
      }
    </div>
  );
}
