import styles from "./cart.module.css";
import CartTable from "src/shared/components/CartTable";
import InputField from "src/shared/components/InputField/InputField";
import PrimaryTextButton from "src/shared/components/Buttons/TextButton/variants/PrimaryTextButton/PrimaryTextButton";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FetchCartAction } from "src/shared/api/cart.api";
import { useCartState } from "src/store/cart/cart.atom";
import ComponentLoader from "src/shared/components/Loaders/ComponentLoader";
import SizedBox from "src/shared/components/SizedBox";
import useCheckout from "./useCheckout";
import formatCurrency from "src/shared/utility/formatCurrency";
import { FaCheckCircle } from "react-icons/fa";

export default function Cart() {

  const navigate = useNavigate();
  const [cartState, setCartState] = useCartState();
  const [fetchCartState, setFetchCartState] = useState(cartState);
  
  useEffect(()=> {
    setFetchCartState(state => ({ ...state, status:"loading" }));

    FetchCartAction()
    .then((response)=> {
      setCartState(state => ({ ...state, cart: response.data.cart }))
      setFetchCartState(state => ({
        ...state,
        status:"success",
        message: ""
      }))
    })
    .catch((error)=> {
      setFetchCartState(state => ({
        ...state,
        status:"failed",
        message: error.message
      }))
    })
    .finally(()=> setFetchCartState(state => ({ ...state, status:"idle" })))

  }, [setCartState])

  const {
    checkoutAddressModel,
    checkoutContactModel,
    handleModelChange,
    isFormSubmittable,
    handleCheckout,
    cartTotal,
    isFormSubmitSuccess,
    isSubmitLoading

  } = useCheckout();

  return (
    <div className={styles.cartContainer}>
      {
        !isFormSubmitSuccess &&
        <>
          <div className={styles.cartHeader}>
            <div className={styles.cartHeadings}>
              <div className={styles.cartHeading}>Cart</div>
            </div>
            <div className={styles.cartItemCount}>
              <span className={styles.count}>{cartState.cart.items.length} items</span> in the cart.
            </div>
          </div>
          
          {
            fetchCartState.status === "loading"
            ? <ComponentLoader />
            : cartState.cart.items.length
              ? <section className={styles.cartContent}>
                  <CartTable items={cartState.cart.items} />

                  <div className={styles.checkout}>
                    <div className={styles.address}>
                      <div className={styles.checkoutHeading}>Checkout</div>
                      <InputField
                        placeholder={checkoutAddressModel.placeholder}
                        name={checkoutAddressModel.name}
                        error={checkoutAddressModel.error}
                        onInput={(inputValue)=> handleModelChange(inputValue, checkoutAddressModel)}
                      />
                      <InputField
                        placeholder={checkoutContactModel.placeholder}
                        name={checkoutContactModel.name}
                        error={checkoutContactModel.error}
                        onInput={(inputValue)=> handleModelChange(inputValue, checkoutContactModel)}
                      />
                    </div>

                    <div className={styles.checkoutTotalCard}>
                      <div className={styles.checkoutHeading}>Cart Total</div>

                      <div className={styles.cartTotalItemsList}>
                        <div className={styles.cartTotalItem}>
                          <span className={styles.cartTotalItemKey}>Subtotal</span>
                          <span className={styles.cartTotalItemValue}>{formatCurrency({ amount: cartTotal })}</span>
                        </div>

                        <div className={styles.cartTotalItem}>
                          <span className={styles.cartTotalItemKey}>Discount</span>
                          <span className={styles.cartTotalItemValue}>{formatCurrency({ amount: 0 })}</span>
                        </div>

                        <div className={styles.cartTotalItem}>
                          <span className={styles.cartTotalItemKey}>Total</span>
                          <span className={styles.cartTotalItemValue}>
                            { formatCurrency({ amount: cartTotal }) }
                          </span>
                        </div>
                      </div>

                      <PrimaryTextButton 
                        label="Checkout"
                        isLoading={isSubmitLoading}
                        disabled={!isFormSubmittable}
                        action={()=> handleCheckout()} 
                      />
                    </div>
                  </div>
                </section>

              : <div className={styles.no_item}>
                  <div className={styles.message}>Your cart is empty</div>
                  <SizedBox height="10px" />
                  <PrimaryTextButton 
                    label="Start shopping now"
                    action={()=> navigate("/products")}
                  />
                </div>
          }
        </>
      }

      {
        isFormSubmitSuccess &&
        <div className={styles.orderSuccess}>
          <FaCheckCircle className={styles.orderSuccessIcon} />
          <div>
            <div className={styles.orderSuccessMessage}>Order placed successfully</div>
            <SizedBox height="10px" />
            <PrimaryTextButton
              extrastyle={styles.orderSuccessButton}
              label="Continue shopping"
              action={()=>  navigate("/products")}
            />
          </div>
        </div>
      }
    </div>
  );
}
