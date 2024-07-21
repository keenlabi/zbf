import styles from "./header.module.css";

import { Link, useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import PrimaryTextButton from "../Buttons/TextButton/variants/PrimaryTextButton/PrimaryTextButton";
import { useAuthStateValue } from "src/store/auth/auth.atom";
import CartNav from "../CartNav";

export default function Header() {

  const navigate = useNavigate();
  const authState = useAuthStateValue();

  return <div className={styles.header_wrapper}>
          <div className={styles.header_top}>Get 50% Off on Selected Items</div>
          <header>
            <Logo />

            <nav>
              <ul>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                {
                  authState.isAuthenticated &&
                  <li>
                    <Link to="/orders">Orders</Link>
                  </li>
                }
                {
                  authState.isAuthenticated &&
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                }
              </ul>
            </nav>

            <div className={styles.auth_cart_group}>
              {
                !authState.isAuthenticated &&
                <PrimaryTextButton 
                  label="Login"
                  width={"100px"}
                  action={()=> navigate("/login")}
                />
              }

              {
                authState.isAuthenticated &&
                <CartNav />
              }
            </div>
          </header>
        </div>
}
