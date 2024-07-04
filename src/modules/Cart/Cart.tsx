import CartTable from "src/shared/components/CartTable";
import styles from "./cart.module.css";
import productImage from "src/shared/assets/images/shoes.png";
import InputField from "src/shared/components/InputField/InputField";
import PrimaryTextButton from "src/shared/components/Buttons/TextButton/variants/PrimaryTextButton/PrimaryTextButton";
import { useNavigate } from "react-router-dom";

const products = [
  {
    name: "Nike S43",
    description:
      "Praised by the streets for its classic simplicity and comfort, the Nike Blazer Low '77 Vintage returns with its low-profile style and heritage b-ball looks.",
    image: productImage,
    auxImages: [productImage, productImage, productImage, productImage],
    rating: 5,
    price: 190.2,
    colors: ["red", "blue", "yellow", "brown", "green"],
    sizes: ["37", "38", "39", "41", "42", "43", "44"],
    itemsLeft: 12,
  },
  {
    name: "Adidas S43",
    description:
      "Praised by the streets for its classic simplicity and comfort, the Nike Blazer Low '77 Vintage returns with its low-profile style and heritage b-ball looks.",
    image: productImage,
    auxImages: [productImage, productImage, productImage, productImage],
    rating: 5,
    price: 190.2,
    colors: ["red", "blue", "yellow", "brown", "green"],
    sizes: ["37", "38", "39", "41", "42", "43", "44"],
    itemsLeft: 12,
  },
  {
    name: "Adidas S43",
    description:
      "Praised by the streets for its classic simplicity and comfort, the Nike Blazer Low '77 Vintage returns with its low-profile style and heritage b-ball looks.",
    image: productImage,
    auxImages: [productImage, productImage, productImage, productImage],
    rating: 5,
    price: 190.2,
    colors: ["red", "blue", "yellow", "brown", "green"],
    sizes: ["37", "38", "39", "41", "42", "43", "44"],
    itemsLeft: 12,
  },
];

export default function Cart() {
  const navigate = useNavigate();

  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartHeader}>
        <div className={styles.cartHeadings}>
          <div className={styles.cartHeading}>Cart</div>
          <button className={styles.orderHistoryButton} onClick={() => navigate("/orders")}>
            Order History
          </button>
        </div>
        <div className={styles.cartItemCount}>
          <span className={styles.count}>{2} items</span> in the cart.
        </div>
      </div>

      <section className={styles.cartContent}>
        <CartTable products={products} />

        <div className={styles.checkout}>
          <div className={styles.address}>
            <div className={styles.checkoutHeading}>Checkout</div>
            <InputField onInput={() => {}} placeholder="Address" />

            <PrimaryTextButton action={() => {}} label="Update" />
          </div>

          <div className={styles.coupon}>
            <div className={styles.checkoutHeading}>Coupon code</div>
            <InputField onInput={() => {}} placeholder="Coupon" />
            <div className={styles.couponText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloribus corporis aperiam harum ipsam accusantium tenetur.
            </div>

            <PrimaryTextButton action={() => {}} label="Apply" />
          </div>

          <div className={styles.checkoutTotalCard}>
            <div className={styles.checkoutHeading}>Cart Total</div>

            <div className={styles.cartTotalItemsList}>
              <div className={styles.cartTotalItem}>
                <span className={styles.cartTotalItemKey}>Subtotal</span>
                <span className={styles.cartTotalItemValue}>{123}</span>
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

            <PrimaryTextButton action={() => {}} label="Checkout" />
          </div>
        </div>
      </section>
    </div>
  );
}
