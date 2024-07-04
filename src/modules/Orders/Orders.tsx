import OrdersTable from "src/shared/components/OrdersTable";
import styles from "./orders.module.css";

const date = new Date();
console.log(date.toDateString());

const OrdersList = [
  {
    orderID: "123ABD",
    date: date.toDateString(),
    status: "pending",
    totalPrice: 104,
  },
  {
    orderID: "345DEF",
    date: date.toDateString(),
    status: "complete",
    totalPrice: 104,
  },
  {
    orderID: "432LFG",
    date: date.toDateString(),
    status: "complete",
    totalPrice: 104,
  },
];

export default function Orders() {
  return (
    <div className={styles.ordersContainer}>
      <div className={styles.ordersHeading}>Orders</div>

      <OrdersTable orders={OrdersList} />
    </div>
  );
}
