import styles from "./productdetails.module.css";
import productImage from "src/shared/assets/images/shoes.png";
import star from "src/shared/assets/icons/Icon-star.svg";
import IconButton from "src/shared/components/Buttons/IconButton/IconButton";
import { useEffect, useState } from "react";
import { FetchProductAction } from "src/shared/api/products.api";
import { useParams } from "react-router-dom";
import { useProductState } from "src/store/products/product.atom";
import formatCurrency from "src/shared/utility/formatCurrency";
import CircularRingLoader from "src/shared/components/Loaders/CircularRingLoader";
import { AddToCartAction } from "src/shared/api/cart.api";
import { useCartState } from "src/store/cart/cart.atom";
import { createAlert } from "src/store/alert/atom";
import { useAuthStateValue } from "src/store/auth/auth.atom";

const productObject = {
  name: "Nike S43",
  description:
    "Praised by the streets for its classic simplicity and comfort, the Nike Blazer Low '77 Vintage returns with its low-profile style and heritage b-ball looks.",
  image: productImage,
  auxImages: [productImage, productImage, productImage, productImage],
  rating: 5,
  price: "190.20",
  colors: ["red", "blue", "yellow", "brown", "green"],
  sizes: ["37", "38", "39", "41", "42", "43", "44"],
  itemsLeft: 12,
};

export default function ProductDetails() {

  const authState = useAuthStateValue();

  const { productId } = useParams();

  const [requestState, setRequestState] = useState({
    isLoading: false,
    isError: false,
    message: ""
  });

  const [productState, setProductState] = useProductState();
  const [cartState, setCartState] = useCartState();

  useEffect(()=> {
    if(productId) {
      setRequestState((state)=> ({ ...state, isLoading: true }));

      FetchProductAction(productId)
      .then((networkResponse)=> {
        setRequestState((state)=> ({ ...state, isLoading: false }));
        setProductState((state)=> ({ 
          ...state,
          product: networkResponse.data.product
        }));
      })
      .catch((error)=> {
        setRequestState((state)=> ({
          ...state,
          isLoading: true,
          error: true,
          message: error.message
        }))
      })
    }
  }, [productId, setProductState])


  function addItemToCart() {
    setCartState(state => ({ ...state, status:"loading" }));

    AddToCartAction(productId!)
    .then((networkResponse)=> {
      setCartState(state => ({
        ...state,
        items: networkResponse.data.cart
      }))
      createAlert("success", networkResponse.message);
    })
    .catch((error)=> createAlert("error", error.message))
    .finally(()=> setCartState(state => ({ ...state, status:"idle" })))
  }

  return (
    <div className={styles.ProductDetailsContainer}>
      {/* <CategoryChain /> */}
      
      {
        requestState.isLoading
        ? <CircularRingLoader color="var(--orange-accent-200)" />
        : <section className={styles.ProductDetails}>
          <div className={styles.productImages}>
            <img className={styles.mainImage} src={productObject.image} alt="" />

            <div className={styles.auxilliaryImageGroup}>
              <img className={styles.auxilliaryImage} src={productObject.auxImages[0]} alt="" />
            </div>
          </div>

          <div className={styles.productInfo}>
            <div className={styles.productHeader}>
              <div className={styles.ProductDetailsHeading}>{productState.product.name}</div>
              <div className={styles.ProductDetailsDescription}>{productState.product.description}</div>
              <div className={styles.ProductDetailsRating}>
                {Array.from({ length: productObject.rating }).map((_, index) => (
                  <img key={index} src={star} alt="star" />
                ))}
              </div>
            </div>
            
            <div className={styles.ProductDetailsPrice}>
              <div>
                {
                  formatCurrency({
                    amount: productState.product.price ?? 500, 
                    sigFigures: 2
                  })
                }
              </div>
            </div>

            {/* <QuantitySelector itemsLeft={productState.product.inventory.quantity} /> */}
            
            {
              authState.isAuthenticated &&
              <div className={styles.productInfoButtonGroup}>
                <IconButton 
                  extraStyle={styles.cartButton}
                  label="Add to Cart"
                  isLoading={cartState.status === "loading"}
                  action={()=> addItemToCart()}
                />
              </div>
            }
          </div>
          </section>
      }

      {/* <SuggestedProducts /> */}
    </div>
  );
}
