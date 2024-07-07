import { ICartItem, useCartState } from "src/store/cart/cart.atom";
import styles from "./carttable.module.css";
import formatCurrency from "src/shared/utility/formatCurrency";
import productImage from "src/shared/assets/images/shoes.png";
import { DecreaseCartItemQuantityAction, IncreaseCartItemQuantityAction } from "src/shared/api/cart.api";
import { useState } from "react";

interface CartTableProps {
  items:ICartItem[];
}

export default function CartTable(props:CartTableProps) {

  const [cartState, setCartState] = useCartState();
  const [modifyingItemQuantityState, setModifyingItemQuantityState] = useState(cartState);

  function increaseQuantity(itemId:string) {
    setModifyingItemQuantityState(state => ({ ...state, status:"loading", message: "" }))

    IncreaseCartItemQuantityAction(itemId)
    .then((response)=> {
      setCartState(state => ({ ...state, cart: response.data.cart }))
      setModifyingItemQuantityState(state => ({
        ...state,
        status:"success",
        message: ""
      }))
    })
    .catch((error)=> {
      setModifyingItemQuantityState(state => ({
        ...state,
        status:"failed",
        message: error.message
      }))
    })
    .finally(()=> setModifyingItemQuantityState(state => ({ ...state, status:"idle" })))
  }

  function reduceQuantity(itemId:string) {
    setModifyingItemQuantityState(state => ({ ...state, status:"loading", message: "" }))

    DecreaseCartItemQuantityAction(itemId)
    .then((response)=> {
      setCartState(state => ({ ...state, cart: response.data.cart }))
      setModifyingItemQuantityState(state => ({
        ...state,
        status:"success",
        message: ""
      }))
    })
    .catch((error)=> {
      setModifyingItemQuantityState(state => ({
        ...state,
        status:"failed",
        message: error.message
      }))
    })
    .finally(()=> setModifyingItemQuantityState(state => ({ ...state, status:"idle" })))
  }

  return (
    <div className={styles.table}>
      <div className={styles.tableHeader}>
        <div>Product</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Total</div>
      </div>

      {
        props.items.length
        ? props.items.map((item)=> {
            return  <div className={styles.tableRow} key={item.id}>
                      <div className={styles.tableRowFirst}>
                        <img className={styles.tableRowImage} src={item.product.image ?? productImage} alt="" />
                        <div className={styles.tableRowSecond}>
                          <div className={styles.RowName}>{item.product.name}</div>
                        </div>
                      </div>

                      <div>
                        {
                          formatCurrency({
                            amount: item.product.price ?? 0,
                            sigFigures: 2
                          })
                        }
                      </div>

                      <div className={`
                        ${styles.qtyMod}
                        ${modifyingItemQuantityState.status === "loading" && styles._disabled}
                      `}>
                        <div 
                          className={styles.qtyIcon}
                          children={"-"}
                          onClick={()=> (item.quantity > 1) && reduceQuantity(item.id)}
                        />

                        <div className={styles.qtyValue}>{item.quantity}</div>
                        <div 
                          className={styles.qtyIcon}
                          children={"+"}
                          onClick={()=> increaseQuantity(item.id)}
                        />
                      </div>

                      <div>
                        { 
                          formatCurrency({
                            amount: (item.product.price * item.quantity) ?? 0,
                            sigFigures: 2
                          })
                        }
                      </div>
                    </div>
          })
        : null
      }
    </div>
  );
}
