import { useEffect } from "react";
import styles from "./cartnav.module.css";
import { Link } from "react-router-dom";
import { FetchCartAction } from "src/shared/api/cart.api";
import { useCartState } from "src/store/cart/cart.atom";
import cartIcon from "src/shared/assets/icons/cart.svg";

export default function CartNav() {

    const [cartState, setCartState] = useCartState();

    useEffect(()=> {
        FetchCartAction()
        .then((response)=> setCartState(state => ({ ...state, cart: response.data.cart })))
        .catch(()=> {})
    }, [setCartState])

    return  <Link className={styles.cart_nav} to={"/cart"}>
                {
                    cartState.cart.items.length > 0
                    ? <div className={styles.cartItemNo}>{cartState.cart.items.length}</div>
                    : null
                }
                <img src={cartIcon} alt="" /> 
                <div>Cart</div>
            </Link>
}