import { useNavigate } from "react-router-dom";
// import IconButton from "../Buttons/IconButton/IconButton";
import styles from "./productcard.module.css";
// import IconCart from "src/shared/assets/icons/cart.svg";
import Image from "src/shared/assets/images/shoes.png";
import formatCurrency from "src/shared/utility/formatCurrency";
// import { useAuthStateValue } from "src/store/auth/auth.atom";

interface ProductCardProps {
  id:string;
  name:string;
  description:string;
  image:string;
  price:number;
}

export default function ProductCard(props:ProductCardProps) {
  const navigate = useNavigate();
  // const authState = useAuthStateValue();

  return (
    <div className={styles.ProductContainer} onClick={() => navigate(props.id)}>
      <img className={styles.productImage} src={Image} alt="" />
     
      <div className={styles.ProductDetails}>

        <div className={styles.productName}>{props.name}</div>

        <div className={styles.productPrice}>
          {formatCurrency({amount: props.price})}
        </div>
      </div>
      {/* {
        authState.isAuthenticated &&
        <IconButton 
          extraStyle={styles.productCardButton} 
          prefixIcon={<img src={IconCart} alt="" />} 
          label="Add to Cart" action={() => {}} 
        />
      } */}
    </div>
  );
}
