import { useNavigate } from "react-router-dom";
import styles from "./productcard.module.css";
import formatCurrency from "src/shared/utility/formatCurrency";

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
    <div className={styles.ProductContainer} onClick={() => navigate(`/products/${props.id}`)}>
      <img className={styles.productImage} src={props.image} alt="" />
     
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
