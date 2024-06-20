import CategoryChain from "../CategoryChain/CategoryChain";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.sidebar_wrapper}>
      <CategoryChain />

      <h2>Name of Category</h2>

      <SearchBar />
    </div>
  );
}
