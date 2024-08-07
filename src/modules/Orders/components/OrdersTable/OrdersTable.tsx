import styles from "./orderstable.module.css";
import { determineTimeLapsed } from "src/shared/utility/dateTime.utility";
import OrderStatusPill from "../OrderStatusPill/OrderStatusPill";
import { IOrderStatus } from "src/store/orders/orders.atom";
import formatCurrency from "src/shared/utility/formatCurrency";

interface IOrderTableProps {
  orders:{
    id:string;
    itemCount:number;
    status:IOrderStatus;
    total:number;
    createdAt:string;
  }[]
}

export default function OrdersTable(props:IOrderTableProps) {
  return (
    <div className={styles.table}>
      <div className={styles.tableHeader}>
        <div>Order ID</div>
        <div>Date</div>
        <div>Total</div>
        <div>Status</div>
      </div>

      <div className={styles.tableBody}>
        {
          props.orders.map((order) => {
            return  <div className={styles.tableRow} key={order.id}>
                      <div className={`${styles.tableCell} ${styles.orderId}`}>#{order.id}</div>
                      <div className={styles.tableCell}>{determineTimeLapsed(order.createdAt)}</div>
                      <div className={styles.tableCell}>{formatCurrency({ amount: order.total })}</div>
                      <OrderStatusPill status={order.status} />
                    </div>
          })
        }
      </div>
    </div>
  );
}
