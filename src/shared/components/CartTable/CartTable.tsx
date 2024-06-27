import styles from "./carttable.module.css";

interface Product {
  name: string;
  image: string;
  colors: string[];
  sizes: string[];
  price: number;
}

export default function CartTable({ products }: { products: Product[] }) {
  return (
    <div className={styles.table}>
      <div className={styles.tableHeader}>
        <div>Product</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Total</div>
      </div>

      {products.map((product: Product) => (
        <div className={styles.tableRow} key={product.name}>
          <div className={styles.tableRowFirst}>
            <img className={styles.tableRowImage} src={product.image} alt="" />
            <div className={styles.tableRowSecond}>
              <div className={styles.RowName}>{product.name}</div>
              <div className={styles.low}>
                <div className={styles.tableRowInfo}>
                  color: <span className={styles.value}>{product.colors[1]}</span>
                </div>
                <div className={styles.tableRowInfo}>
                  size: <span className={styles.value}>{product.sizes[1]}</span>
                </div>
              </div>
            </div>
          </div>

          <div>{product.price}</div>
          <div>{12}</div>
          <div>#{(product.price * 12).toFixed(2)}</div>
        </div>
      ))}
    </div>
  );
}
