// import CartTable from "src/shared/components/CartTable";
import styles from "./orderdetail.module.css";
// import productImage from "src/shared/assets/images/shoes.png";
import PrimaryTextButton from "src/shared/components/Buttons/TextButton/variants/PrimaryTextButton/PrimaryTextButton";


export default function OrderDetail() {
  return (
    <div className={styles.orderDetailContainer}>
      <div className={styles.orderDetailHeading}>Order Detail</div>

      <section className={styles.orderContent}>
        {/* <CartTable products={products} /> */}

        <div className={styles.details}>
          <div className={styles.detailsHeading}>Order Details</div>

          <div className={styles.detailsCard}>
            <div className={styles.cartTotalItemsList}>
              <div className={styles.cartTotalItem}>
                <span className={styles.cartTotalItemKey}>Status</span>
                <span className={styles.cartTotalItemValue}>{"Complete"}</span>
              </div>

              <div className={styles.cartTotalItem}>
                <span className={styles.cartTotalItemKey}>Discount</span>
                <span className={styles.cartTotalItemValue}>{20}</span>
              </div>

              <div className={styles.cartTotalItem}>
                <span className={styles.cartTotalItemKey}>Total</span>
                <span className={styles.cartTotalItemValue}>{103}</span>
              </div>
            </div>

            <PrimaryTextButton action={() => {}} label="ask a question" />
          </div>
        </div>
      </section>
    </div>
  );
}
