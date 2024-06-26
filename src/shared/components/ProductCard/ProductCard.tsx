import { useNavigate } from "react-router-dom";
import IconButton from "../Buttons/IconButton/IconButton";
import styles from "./productcard.module.css";
import IconCart from "src/shared/assets/icons/cart.svg";
import Image from "src/shared/assets/images/shoes.png";

const productObject = {
  name: "Nike S43",
  description:
    "Praised by the streets for its classic simplicity and comfort, the Nike Blazer Low '77 Vintage returns with its low-profile style and heritage b-ball looks.",
  image: Image,
  auxImages: [Image, Image, Image, Image],
  rating: 5,
  price: "190.20",
  colors: ["red", "blue", "yellow", "brown", "green"],
  sizes: ["37", "38", "39", "41", "42", "43", "44"],
  itemsLeft: 12,
};

export default function ProductCard() {
  const navigate = useNavigate();
  return (
    <div className={styles.ProductContainer} onClick={() => navigate("product-detail/123")}>
      <img className={styles.productImage} src={Image} alt="" />
      <div className={styles.productDetail}>
        <p className={styles.productName}>{productObject.name}</p>
        <p className={styles.productDescription}>Product details</p>
        <p className={styles.productPrice}>
          <span className={styles.dollarSign}>$</span>
          {productObject.price.split(".")[0]}
          <span className={styles.decimals}>.{productObject.price.split(".")[1]}</span>
        </p>
      </div>

      <IconButton extraStyle={styles.productCardButton} prefixIcon={<img src={IconCart} alt="" />} label="Add to Cart" action={() => {}} />
    </div>
  );
}
