import styles from "./customerstable.module.css";
import { formatDate } from "src/shared/utility/dateTime.utility";

interface ICustomersTableProps {
  customers:{
    id:string;
    email:string;
    createdAt:string;
  }[]
}

export default function CustomersTable(props:ICustomersTableProps) {

  return (
    <div className={styles.table}>
      <div className={styles.tableHeader}>
        <div>Customer ID</div>
        <div>Email</div>
        <div>Registered on</div>
      </div>

      <div className={styles.tableBody}>
        {
          props.customers.map((customer) => {
            return  <div className={styles.tableRow} key={customer.id}>
                      <div className={`${styles.tableCell} ${styles.customersId}`}>#{customer.id}</div>
                      <div className={styles.tableCell}>{customer.email}</div>
                      <div className={styles.tableCell}>{formatDate(customer.createdAt)}</div>
                    </div>
          })
        }
      </div>
    </div>
  );
}
