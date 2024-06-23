import IconButton from "../Buttons/IconButton/IconButton";
import styles from "./productcard.module.css";
import IconCart from "src/shared/assets/icons/cart.svg";
import Image from "src/shared/assets/images/shoes.png";

export default function ProductCard() {
  return (
    <div className={styles.ProductContainer}>
      <img className={styles.productImage} src={Image} alt="" />
      <div className={styles.productDetail}>
        <p className={styles.productName}>Product</p>
        <p className={styles.productDescription}>Product details</p>
        <p className={styles.productPrice}>
          <span className={styles.dollarSign}>$</span>
          95
          <span className={styles.decimals}>.00</span>
        </p>
      </div>

      <IconButton extraStyle={styles.productCardButton} prefixIcon={<img src={IconCart} alt="" />} label="Add to Cart" action={() => {}} />
    </div>
  );
}
