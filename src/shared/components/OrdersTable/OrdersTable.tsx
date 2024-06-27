import { useNavigate } from "react-router-dom";
import styles from "./orderstable.module.css";

interface Order {
  orderID: string;
  date: string;
  status: string;
  totalPrice: number;
}

export default function OrdersTable({ orders }: { orders: Order[] }) {
  const navigate = useNavigate();

  return (
    <div className={styles.table}>
      <div className={styles.tableHeader}>
        <div>Order ID</div>
        <div>Date</div>
        <div>Status</div>
        <div>Total price</div>
        <div>Actions</div>
      </div>

      {orders.map((order: Order) => (
        <div className={styles.tableRow} key={order.orderID}>
          <div className={styles.tableRowItem}>{order.orderID}</div>
          <div className={styles.tableRowItem}>{order.date}</div>
          <div className={`${styles.tableRowItem} ${order.status === "complete" ? styles.complete : styles.pending}`} id={styles.capsule}>
            {order.status}
          </div>
          <div className={styles.tableRowItem}>{order.totalPrice}</div>
          <button className={styles.tableRowItem} id={styles.action} onClick={() => navigate(`/order-detail/${order.orderID}`)}>
            {order.status === "complete" ? "View" : "Continue"}
          </button>
        </div>
      ))}
    </div>
  );
}
