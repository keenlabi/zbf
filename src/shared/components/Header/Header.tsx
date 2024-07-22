import styles from "./header.module.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import PrimaryTextButton from "../Buttons/TextButton/variants/PrimaryTextButton/PrimaryTextButton";
import { authInitState, useAuthState } from "src/store/auth/auth.atom";
import CartNav from "../CartNav";
import { LogoutAction } from "src/shared/api/auth.api";
import { userInitState, useUserState } from "src/store/user/user.atom";
import { useState } from "react";

export default function Header() {

  const navigate = useNavigate();
  const [authState, setAuthState] = useAuthState();
  const [logoutState, setLogoutState] = useState(authState);
  
  const [userState, setUserState] = useUserState();

  function submitLogout() {
    setLogoutState((state) => ({ ...state, status: "loading" }));

    LogoutAction()
    .then(() => {
      localStorage.removeItem("sid.set");
      setUserState(() => userInitState);
      setAuthState(() => authInitState);
      navigate({ pathname: "/" })
    })
    .catch((error)=> console.log(error))
    .finally(()=> setLogoutState((state) => ({ ...state, status: "idle" })))
  }

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
                  userState.profile.role === "customer" &&
                  <li>
                    <Link to="/orders">Orders</Link>
                  </li>
                }
                {
                  authState.isAuthenticated &&
                  userState.profile.role === "admin" &&
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                }
              </ul>
            </nav>

            <div className={styles.auth_cart_group}>
              {
                authState.isAuthenticated &&
                <CartNav />
              }

              {
                !authState.isAuthenticated
                ? <PrimaryTextButton 
                    label="Login"
                    width={"100px"}
                    action={()=> navigate("/login")}
                  />
                : <PrimaryTextButton
                    extraStyle={styles.logout}
                    loaderColor={"red"}
                    label="Logout"
                    width={"100px"}
                    isLoading={logoutState.status === "loading"}
                    action={()=> submitLogout()}
                  />
              }
            </div>
          </header>
        </div>
}
