import ProductCard from "src/shared/components/ProductCard";
import styles from "./products.module.css";
import Pagination from "src/shared/components/Pagination";
import Filter from "src/shared/components/Filter";

export default function Products() {
  return (
    <div className={styles.productsContainer}>
      <div className={styles.productsHeader}>
        <Filter />
        <p className={styles.productResultCount}>Showing 1-15 of 200 results</p>
      </div>

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
