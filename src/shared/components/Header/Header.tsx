import styles from "./header.module.css";
import UserIcon from "src/shared/assets/icons/userIcon.svg";
import cartIcon from "src/shared/assets/icons/cart.svg";

export default function Header() {
  return (
    <div className={styles.header_wrapper}>
      <div className={styles.header_top}>Get 50% Off on Selected Items</div>
      <header>
        <div className={styles.logo}>Logo</div>

        <nav>
          <ul>
            <li>
              <a href="">Product</a>
            </li>
            <li>
              <a href="">Product</a>
            </li>
            <li>
              <a href="">Product</a>
            </li>
            <li>
              <a href="">Product</a>
            </li>
          </ul>
        </nav>

        <div className={styles.auth_cart_group}>
          <div className={styles.acct}>
            <img src={UserIcon} alt="" />
            My account
          </div>
          <div className={styles.cart}>
            <img src={cartIcon} alt="" />
            Cart
          </div>
        </div>
      </header>
    </div>
  );
}
