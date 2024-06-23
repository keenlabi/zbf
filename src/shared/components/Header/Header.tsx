import styles from "./header.module.css";
import UserIcon from "src/shared/assets/icons/userIcon.svg";
import cartIcon from "src/shared/assets/icons/cart.svg";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
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
          <button className={styles.cart} onClick={() => navigate("cart")}>
            {" "}
            {/* will replace this with a btn component */}
            <img src={cartIcon} alt="" />
            Cart
          </button>
        </div>
      </header>
    </div>
  );
}
