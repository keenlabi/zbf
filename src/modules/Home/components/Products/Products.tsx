import ProductCard from "src/shared/components/ProductCard";
import styles from "./products.module.css";
import Pagination from "src/shared/components/Pagination";

export default function Products() {
  return (
    <div className={styles.productsContainer}>
      <div className={styles.productsHeader}></div>

      <main className={styles.productsMain}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </main>

      <div className={styles.productsFooter}>
        <Pagination />
      </div>
    </div>
  );
}
