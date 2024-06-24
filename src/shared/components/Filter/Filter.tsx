import IconButton from "../Buttons/IconButton/IconButton";
import styles from "./filter.module.css";
import iconDown from "src/shared/assets/icons/chevron-down.svg";

export default function Filter() {
  return (
    <div className={styles.filterContainer}>
      {/* 
        please stop using p tags, it's essence to to add extra padding to text
        which is against the design principles for my styling approach 
        <p className={styles.filterText}>Filter:</p>
      */}
      <IconButton extraStyle={styles.filterButton} suffixIcon={<img src={iconDown} alt="" />} action={() => {}} label="Product Category" />
      <IconButton extraStyle={styles.filterButton} suffixIcon={<img src={iconDown} alt="" />} action={() => {}} label="Price" />
    </div>
  );
}
