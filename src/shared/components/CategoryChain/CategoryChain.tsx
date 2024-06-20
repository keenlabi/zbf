import styles from "./categorychain.module.css";

export default function CategoryChain() {
  return (
    <div className={styles.category_chain_wrapper}>
      <p>
        <span>Home</span> / <span>Category</span> / <span>Category</span>
      </p>
    </div>
  );
}
