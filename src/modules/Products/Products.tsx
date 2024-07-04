import styles from "./products.module.css";
import ProductCategoriesSideBar from "./components/ProductCategories/ProductCategoriesSideBar";
import ProductsList from "./components/ProductsList/ProductsList";

export default function Products() {
  return (
    <div className={styles.productsPage}>

      <main className={styles.productsMain}>
        <ProductCategoriesSideBar />
        <ProductsList />
      </main>
    </div>
  );
}
