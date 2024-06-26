import ProductCard from "../ProductCard";
import styles from "./suggestedproducts.module.css";

export default function SuggestedProducts() {
  return (
    <div className={styles.suggestedProductsContainer}>
      <div className={styles.suggestedProductsHeading}>Similar Items You Might Like</div>

      <section className={styles.suggestedProductsGrid}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
    </div>
  );
}
